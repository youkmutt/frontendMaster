import { useEffect, useRef, useState } from "react";
import { useAlert } from "@/app/context/AlertContext";
import TextSearch from "@/app/components/search/TextSearch";
import DropdownSearch from "@/app/components/search/DropdownSearch";
import DateRangePicker from "@/app/components/search/DateRangePicker";
import Box from "@/app/components/search/Box";
import MoneySearch from "@/app/components/search/MoneySearch";
import SampleButton from "@/app/components/SampleButton";
import { useLoading } from "@/app/context/LoadingContext";
import DT from "@/app/components/DataTable";
import {
  DropdownModel,
  DropdownApi,
  BankReconcileApi,
  ApiBankReconcileListGetRequest,
  LogImportStatementResponseModel,
} from "@/api_main";
import { apiConfig } from "@/app/utils/api-client";

function Tab1() {
  const { showAlert } = useAlert();
  const ddl_api = new DropdownApi();
  const { setLoading } = useLoading();
  const [ddl_bankaccount, set_ddl_bankaccount] = useState<DropdownModel[]>([]);
  const [data, set_data] = useState<LogImportStatementResponseModel>();
  const [clearTrigger, setClearTrigger] = useState(0);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      setLoading(true);
      get_ddl_bank();
      search();
    }
  }, []);

  const [model, setModel] = useState<ApiBankReconcileListGetRequest>({
    accountId: undefined,
    dateStart: null,
    dateEnd: null,
    startCreateDate: undefined,
    endCreateDate: undefined,
    fileName: undefined,
    fromMoneyCumulative: undefined,
    toMoneyCumulative: undefined,
    pageSize: 100,
    pageIndex: 1,
    activeFlag: true,
  });

  const bank_api = new BankReconcileApi(apiConfig);

  const get_ddl_bank = async () => {
    try {
      ddl_api.apiDropdownDdlBankAccountGet().then((response) => {
        setLoading(false);
        set_ddl_bankaccount(response.data ?? []);
      });
    } catch (err) {
      setLoading(false);
      console.error("API error:", err);
      showAlert("API error: " + err, "error");
    }
  };

  const search = async () => {
    try {
      setLoading(true);
      await bank_api.apiBankReconcileListGet(model).then((response) => {
        set_data(response);
      });
    } catch (err) {
      setLoading(false);
      console.error("API error:", err);
      showAlert(String(err), "error");
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setModel({
      accountId: undefined,
      dateStart: null,
      dateEnd: null,
      startCreateDate: undefined,
      endCreateDate: undefined,
      fileName: undefined,
      fromMoneyCumulative: undefined,
      toMoneyCumulative: undefined,
      pageSize: 100,
      pageIndex: 1,
      activeFlag: true,
    });
    setClearTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (clearTrigger > 0) {
      search();
    }
  }, [clearTrigger]);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl text-fa-primary">นำเข้า Statement</h2>
      </div>

      <h3 className="text-lg font-medium text-gray-700 mb-4">ค้นหา</h3>

      <div className="grid xl:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Box
          label="วันที่นำเข้าข้อมูล"
          component={
            <DateRangePicker
              onChange={function (start: string, end: string): void {
                setModel((prev) => ({
                  ...prev,
                  startCreateDate: start,
                  endCreateDate: end,
                }));
              }}
              clearTrigger={clearTrigger}
            ></DateRangePicker>
          }
        ></Box>

        <Box
          label="บัญชีเงินฝาก"
          component={
            <DropdownSearch
              list={ddl_bankaccount}
              clearTrigger={clearTrigger}
              onClick={function (id?: any, value?: string): void {
                console.log(id, value);
                setModel((prev) => ({
                  ...prev,
                  accountId: id,
                }));
              }}
            ></DropdownSearch>
          }
        ></Box>

        <Box
          component={
            <TextSearch
              label="ชื่อไฟล์"
              clearTrigger={clearTrigger}
              onChange={function (value: string | undefined): void {
                setModel((prev) => ({
                  ...prev,
                  fileName: value,
                }));
              }}
            ></TextSearch>
          }
        ></Box>

        <Box
          label="ช่วงเวลาข้อมูล"
          component={
            <DateRangePicker
              dateOnly={true}
              onChange={function (start: string, end: string): void {
                setModel((prev) => ({
                  ...prev,
                  dateStart: start,
                  dateEnd: end,
                }));
              }}
              clearTrigger={clearTrigger}
            ></DateRangePicker>
          }
        ></Box>

        <Box
          label="จำนวนเงินรวม"
          component={
            <div className="flex space-x-2">
              <MoneySearch
                clearTrigger={clearTrigger}
                onChange={function (value: number | undefined): void {
                  setModel((prev) => ({
                    ...prev,
                    fromMoneyCumulative: value,
                  }));
                }}
              ></MoneySearch>
              <span className="self-center text-gray-500">-</span>
              <MoneySearch
                clearTrigger={clearTrigger}
                onChange={function (value: number | undefined): void {
                  setModel((prev) => ({
                    ...prev,
                    toMoneyCumulative: value,
                  }));
                }}
              ></MoneySearch>
            </div>
          }
        ></Box>
      </div>

      <div className="flex justify-center space-x-4 ">
        <SampleButton text={"ค้นหา"} onClick={() => search()}></SampleButton>
        <SampleButton
          text="ล้าง"
          onClick={() => clear()}
          additional_class={
            "mr-2 font-semibold rounded-t-md bg-white text-fa-primary hover:text-white  border border-gray-300"
          }
        ></SampleButton>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        <DT data={data?.data}></DT>
      </div>
    </>
  );
}

export default Tab1;
