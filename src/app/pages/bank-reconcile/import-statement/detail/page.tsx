"use client";

import { decryptId } from "@/app/utils/encryption";
import { useSearchParams } from "next/navigation";
import { useAlert } from "@/app/context/AlertContext";
import { useLoading } from "@/app/context/LoadingContext";
import {
  ApiBankReconcileDetailIdGetRequest,
  ApiBankReconcileListStatementGetRequest,
  BankReconcileApi,
  ImportStatementDetailModelBaseResponseModel,
  ImportStatementModel,
  ImportStatementResponseModel,
  LogImportStatementModel,
} from "@/api_main";
import { apiConfig } from "@/app/utils/api-client";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { PaginatorPassThroughMethodOptions } from "primereact/paginator";

function ImportStatementDetail() {
  const isMounted = useRef(false);
  const { showAlert } = useAlert();
  const { setLoading } = useLoading();

  const searchParams = useSearchParams();
  const decrypted = decryptId(searchParams.get("id") ?? "");
  const id = Number(decrypted);

  const ConvertDate = (date_inpt: any) => {
    const date = new Date(date_inpt);

    const datePart = date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const timePart = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const result = `${datePart} ${timePart}`;

    return result;
  };

  const bank_api = new BankReconcileApi(apiConfig);

  const [model, set_model] = useState<ApiBankReconcileListStatementGetRequest>({
    impId: id,
    pageSize: 10,
    pageIndex: 1,
  });
  const [data, set_data] = useState<ImportStatementResponseModel>();
  const search = async () => {
    try {
      setLoading(true);
      await bank_api
        .apiBankReconcileListStatementGet(model)
        .then((response: ImportStatementResponseModel) => {
          set_data(response);
          console.log(response);
        });
    } catch (err) {
      setLoading(false);
      showAlert(String(err), "error");
    } finally {
      setLoading(false);
    }
  };

  const [detail_model, set_detail_model] =
    useState<ApiBankReconcileDetailIdGetRequest>({
      id: id,
    });
  const [detail_data, set_detail_data] =
    useState<ImportStatementDetailModelBaseResponseModel>();
  const [header_detail, set_header_detail] =
    useState<LogImportStatementModel>();

  const detail = async () => {
    try {
      setLoading(true);
      await bank_api
        .apiBankReconcileDetailIdGet(detail_model)
        .then((response: ImportStatementDetailModelBaseResponseModel) => {
          set_detail_data(response);
          set_header_detail(response.data?.logImportStatement);
          console.log(response.data?.logImportStatement);
        });
    } catch (err) {
      setLoading(false);
      showAlert(String(err), "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      setLoading(true);
      search();
      detail();
    }
  }, []);

  return (
    <div className="p-4 border border-gray-300 rounded-xl bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl text-fa-primary">
          {"["}
          {header_detail?.bank_account_no} {header_detail?.bank_account_name}
          {"] "}
          {header_detail?.imp_file_name}
        </h2>
      </div>

      <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4 mb-6">
        <div className="flex flex-col justify-left text-left border-gray-300 rounded-xl bg-gray-200 m-2 p-2 lg:col-span-2 xl:col-span-2">
          <div className="grid xl:grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <label className="text-sm text-gray-500">วันที่นำเข้าข้อมูล</label>
            <label className="text-sm">
              {ConvertDate(header_detail?.create_date)}
            </label>
            <label className="text-sm text-gray-500">จำนวนรายการ</label>
            <label className="text-sm">{header_detail?.imp_file_rows}</label>
          </div>
        </div>
        <div className="flex flex-col justify-left text-left border-gray-300 rounded-xl bg-gray-200 m-2 p-2">
          <div className="grid xl:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <label className="text-sm text-gray-500">จำนวนเงินรวม</label>
            <div className="flex justify-between items-center text-xl font-bold">
              <span>
                {Intl.NumberFormat("en-US").format(
                  header_detail?.money_movement ?? 0
                )}
              </span>
              <span className="text-fa-primary">฿</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-left text-left border-gray-300 rounded-xl bg-gray-200 m-2 p-2">
          <div className="grid xl:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <label className="text-sm text-gray-500">จำนวนเงินสะสม</label>
            <div className="flex justify-between items-center text-xl font-bold">
              <span>
                {Intl.NumberFormat("en-US").format(
                  header_detail?.money_cumulative ?? 0
                )}
              </span>
              <span className="text-fa-primary">฿</span>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-medium text-gray-700 mb-4">
        รายการ Statement
      </h3>

      <div className="card">
        <h2 className="text-xl font-bold mb-4">ประวัติการนำเข้า</h2>
        <div className="overflow-x-auto w-full">
          <DataTable
            scrollable
            scrollHeight="flex"
            unstyled={false}
            value={data?.data}
            paginator
            rows={10}
            className="border rounded-lg"
            tableStyle={{ minWidth: "50rem" }}
            rowsPerPageOptions={[10, 30, 50, 100]}
            // currentPageReportTemplate="{first} - {last} {totalRecords}"
            pt={{
              paginator: {
                pageButton: (options: PaginatorPassThroughMethodOptions) => {
                  const isActive = options?.context?.active;
                  return {
                    className: isActive
                      ? "bg-fa-primary text-white rounded-md focus:shadow-none text-sm"
                      : "bg-white text-fa-primary hover:bg-fa-primary hover:text-white rounded-md text-sm",
                  };
                },
              },
            }}
            paginatorTemplate={{
              layout:
                "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
              RowsPerPageDropdown: (options) => {
                return (
                  <span className="flex flex-row w-10 pl-10 mr-20">
                    <Dropdown
                      inputId="rows"
                      value={options.value}
                      options={options.options}
                      onChange={options.onChange}
                      className="focus:border-fa-primary hover:border-fa-primary"
                      pt={{
                        input: { className: "text-sm" },
                        item: (options) => {
                          const isSelected = options?.context?.selected;
                          return {
                            className: isSelected
                              ? "bg-fa-primary text-white text-sm"
                              : "hover:bg-rose-100 text-black text-sm",
                          };
                        },
                      }}
                    />
                  </span>
                );
              },
            }}
          >
            <Column
              header="ลำดับ"
              field="row_number"
              headerClassName="text-xs text-center"
              bodyClassName="text-sm text-center"
            />
            <Column
              header="วันที่นำเข้าข้อมูล"
              body={(rowData: ImportStatementModel) =>
                rowData.stmt_datetime ? ConvertDate(rowData.stmt_datetime) : "-"
              }
              headerClassName="text-xs custom-header-center"
              bodyClassName="text-sm text-left"
            />
            <Column
              header="เลขที่อ้างอิง"
              field="ref1"
              headerClassName="text-xs custom-header-center"
              bodyClassName="text-sm text-left"
            />
            <Column
              header="ชื่อ - นามสกุล"
              body={(rowData) => `-`}
              headerClassName="text-xs custom-header-center"
              bodyClassName="text-sm text-left"
            />
            <Column
              header="รายละเอียดรายการ"
              field="stmt_description"
              headerClassName="text-xs custom-header-center"
              bodyClassName="text-sm text-left"
            />
            <Column
              header="รหัสรายการ"
              field="sequence_no"
              headerClassName="text-xs custom-header-center"
              bodyClassName="text-sm text-left"
            />

            <Column
              header="จำนวนเงินรายการ"
              body={(rowData) =>
                new Intl.NumberFormat("en-US").format(
                  rowData.stmt_money_movement
                )
              }
              headerClassName="text-xs custom-header-center"
              bodyClassName="text-sm text-right"
            />
            <Column
              header="จำนวนเงินสะสม"
              body={(rowData) =>
                new Intl.NumberFormat("en-US").format(
                  rowData.stmt_money_cumulative
                )
              }
              headerClassName="text-xs custom-header-center"
              bodyClassName="text-sm text-right"
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default ImportStatementDetail;
