"use client";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { LogImportStatementModel } from "@/api_main";
import { ApiFilesV2FileNameGetRequest, FilesApi } from "@/api_url";
import { Dropdown } from "primereact/dropdown";
import { PaginatorPassThroughMethodOptions } from "primereact/paginator";

interface DTProps {
  data?: Array<LogImportStatementModel>;
}

const DT: React.FC<DTProps> = ({ data }) => {
  const file_api = new FilesApi();
  const download = (request: ApiFilesV2FileNameGetRequest) => {
    file_api
      .apiFilesV2FileNameGet(request, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      })
      .then((blobResponse: Blob) => {
        console.log(blobResponse);
        const url = window.URL.createObjectURL(blobResponse);
        const a = document.createElement("a");
        a.href = url;
        const fileName = request.fileName;
        a.download = fileName || "downloaded_file";
        document.body.appendChild(a);

        a.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">ประวัติการนำเข้า</h2>
      <div className="overflow-x-auto w-full">
        <DataTable
          scrollable
          scrollHeight="flex"
          unstyled={false}
          value={data}
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
            field="row_number"
            header="ลำดับ"
            headerClassName="text-xs text-center"
            bodyClassName="text-sm text-center"
          />
          <Column
            header="วันที่นำเข้าข้อมูล"
            body={(rowData) =>
              rowData.create_date
                ? new Date(rowData.create_date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })
                : "-"
            }
            headerClassName="text-xs custom-header-center"
            bodyClassName="text-sm text-left"
          />
          <Column
            field="bank_account_no"
            header="บัญชีเงินฝาก"
            headerClassName="text-xs custom-header-center"
            bodyClassName="text-sm text-left"
          />
          <Column
            // field="imp_file_name"
            header="ชื่อไฟล์"
            headerClassName="text-xs custom-header-center"
            bodyClassName="text-sm text-left"
            body={(item) => (
              <a
                className="text-fa-primary cursor-pointer hover:underline"
                onClick={() =>
                  download({
                    fileName: item.imp_file_name,
                    filePath: item.imp_file_path,
                  })
                }
              >
                {item.imp_file_name}
              </a>
            )}
          />
          <Column
            header="ช่วงเวลาข้อมูล"
            body={(rowData) => `${rowData.date_start} - ${rowData.date_end}`}
            headerClassName="text-xs custom-header-center"
            bodyClassName="text-sm text-left"
          />
          <Column
            field="imp_file_rows"
            header="จำนวนรายการ"
            headerClassName="text-xs custom-header-center"
            bodyClassName="text-sm text-center"
          />
          <Column
            header="จำนวนเงินรวม"
            body={(rowData) =>
              new Intl.NumberFormat("en-US").format(rowData.money_cumulative)
            }
            headerClassName="text-xs custom-header-center"
            bodyClassName="text-sm text-right"
          />
          <Column
            header="จัดการ"
            headerClassName="text-xs custom-header-center"
            bodyClassName="text-sm text-center"
            body={(rowData) => (
              <div className="flex justify-center gap-3 text-sm">
                <i
                  className="pi pi-pencil cursor-pointer text-gray-500 hover:text-fa-primary"
                  title="แก้ไข"
                  onClick={() => console.log("Edit", rowData)}
                />
                <i
                  className="pi pi-trash cursor-pointer text-gray-500 hover:text-fa-primary"
                  title="ลบ"
                  onClick={() => console.log("Delete", rowData)}
                />
              </div>
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default DT;
