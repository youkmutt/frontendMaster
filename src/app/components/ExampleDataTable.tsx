"use client";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { LogImportStatementModel } from "@/api_main";
import "./style/ExampleDataTable.css";
import { ApiFilesV2FileNameGetRequest, FilesApi } from "@/api_url";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { id: "1", name: "Apple", price: 120, category: "Fruit" },
  { id: "2", name: "Carrot", price: 50, category: "Vegetable" },
  { id: "3", name: "Bread", price: 80, category: "Bakery" },
];

interface ExampleDataTableProps {
  data?: Array<LogImportStatementModel>;
}

const ExampleDataTable: React.FC<ExampleDataTableProps> = ({ data }) => {
  const file_api = new FilesApi();
  const download = (request: ApiFilesV2FileNameGetRequest) => {
    file_api
      .apiFilesV2FileNameGet(request, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
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
          rowsPerPageOptions={[10, 30, 50, 100]}
          //   paginatorTemplate=" CurrentPageReport PrevPageLink PageLinks NextPageLink RowsPerPageDropdown"
          //   currentPageReportTemplate="แสดง {first} ถึง {last} จาก {totalRecords} รายการ"
          tableStyle={{ minWidth: "50rem" }}
          className="border rounded-lg"
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
                href="javascript:void(0);"
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

export default ExampleDataTable;
