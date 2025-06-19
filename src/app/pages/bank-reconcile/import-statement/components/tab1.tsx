import { useEffect, useState } from "react";
import { useAlert } from "@/app/context/AlertContext";
import TextSearch from "@/app/components/search/TextSearch";
import DropdownSearch from "@/app/components/search/DropdownSearch";
import DateRangePicker from "@/app/components/search/DateRangePicker";
import Box from "@/app/components/search/Box";
import MoneySearch from "@/app/components/search/MoneySearch";
import SampleButton from "@/app/components/SampleButton";
import { useLoading } from "@/app/context/LoadingContext";
import Table, { TableHeaderModel } from "@/app/components/Table";
import ExampleDataTable from "@/app/components/ExampleDataTable";
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
  const [table_header, set_table_header] = useState<TableHeaderModel[]>([]);
  const [data, set_data] = useState<LogImportStatementResponseModel>();

  useEffect(() => {
    setLoading(true);
    set_table_header([
      {
        position: "text-center",
        text: "ลำดับ",
      },
      {
        position: "text-center",
        text: "วันที่นำเข้าข้อมูล",
      },
      {
        position: "text-center",
        text: "บัญชีเงินฝาก",
      },
      {
        position: "text-center",
        text: "ชื่อไฟล์",
      },
      {
        position: "text-center",
        text: "ช่วงเวลาข้อมูล",
      },
      {
        position: "text-center",
        text: "จำนวนรายการ",
      },
      {
        position: "text-center",
        text: "จำนวนเงินรวม",
      },
      {
        position: "text-center",
        text: "จัดการ",
      },
    ]);
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
  }, []);

  const model: ApiBankReconcileListGetRequest = {
    pageSize: 100,
    pageIndex: 1,
    activeFlag: true,
  };
  const bank_api = new BankReconcileApi(apiConfig);
  const search = async (model: ApiBankReconcileListGetRequest) => {
    try {
      setLoading(true);
      await bank_api.apiBankReconcileListGet(model).then((response) => {
        set_data(response);
        setLoading(false);
        console.log(response);
      });
    } catch (err) {
      setLoading(false);
      console.error("API error:", err);
      showAlert("Invalid username or password", "error");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl text-fa-primary">นำเข้า Statement</h2>
      </div>

      <h3 className="text-lg font-medium text-gray-700 mb-4">ค้นหา</h3>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Box
          label="วันที่นำเข้าข้อมูล"
          component={
            <DateRangePicker
              onChange={function (start: string, end: string): void {
                showAlert(start + " - " + end, "success");
              }}
            ></DateRangePicker>
          }
        ></Box>

        <Box
          label="บัญชีเงินฝาก"
          component={
            <DropdownSearch
              list={ddl_bankaccount}
              onClick={function (id?: any, value?: string): void {
                console.log(id, value);
              }}
            ></DropdownSearch>
          }
        ></Box>

        <Box
          component={
            <TextSearch
              label="ชื่อไฟล์"
              onChange={function (value: string): void {
                console.log(value);
              }}
            ></TextSearch>
          }
        ></Box>

        <Box
          label="ช่วงเวลาข้อมูล"
          component={
            <DateRangePicker
              onChange={function (start: string, end: string): void {
                showAlert(start + " - " + end, "success");
              }}
            ></DateRangePicker>
          }
        ></Box>

        <Box
          label="จำนวนเงินรวม"
          component={
            <div className="flex space-x-2">
              <MoneySearch
                onChange={function (value: string): void {
                  console.log("MoneySearch :", value);
                }}
              ></MoneySearch>
              <span className="self-center text-gray-500">-</span>
              <MoneySearch
                onChange={function (value: string): void {
                  console.log("MoneySearch :", value);
                }}
              ></MoneySearch>
            </div>
          }
        ></Box>
      </div>

      <div className="flex justify-center space-x-4 ">
        <SampleButton
          text={"ค้นหา"}
          onClick={() => search(model)}
        ></SampleButton>
        <SampleButton
          text="ล้าง"
          onClick={() => console.log("clear")}
          additional_class={
            "mr-2 font-semibold rounded-t-md bg-white text-fa-primary hover:text-white  border border-gray-300"
          }
        ></SampleButton>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        <Table
          header={"ประวัติการนำเข้า"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          thead={table_header}
        ></Table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        <ExampleDataTable data={data?.data}></ExampleDataTable>
      </div>
    </>
  );
}

export default Tab1;
