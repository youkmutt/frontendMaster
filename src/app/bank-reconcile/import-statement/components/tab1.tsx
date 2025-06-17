import { Calendar } from "lucide-react";
import ImportStatementDetail from "./detail";
import TextSearch from "@/app/components/search/TextSearchProps";
import MyDatePicker from "@/app/components/search/MyDatePicker";

function Tab1() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-fa-primary">นำเข้า Statement</h2>
      </div>

      <h3 className="text-lg font-medium text-gray-700 mb-4">ค้นหา</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* <div>

            
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            วันที่นำเข้าข้อมูล
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="date"
              id="startDate"
              className="flex-1 block w-full px-3 py-2 bg-white text-gray-900 rounded-l-lg focus:outline-none"
              placeholder="Start Date - End Date"
            />
            <span className="p-2 border-l border-gray-300">
              <Calendar className="w-5 h-5 text-gray-500" />
            </span>
          </div>
        </div> */}
        <MyDatePicker></MyDatePicker>
        {/* Account Dropdown */}
        <div>
          <label
            htmlFor="account"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            บัญชีเงินฝาก
          </label>
          <div className="relative">
            <select
              id="account"
              className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
            >
              <option value="">Please Enter</option>
              <option value="account1">Account 1</option>
              <option value="account2">Account 2</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <TextSearch
          label="ชื่อไฟล์"
          onChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        ></TextSearch>

        {/* Time Range */}
        <div>
          <label
            htmlFor="timeRange"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ช่วงเวลาข้อมูล
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="date"
              id="timeRange"
              className="flex-1 block w-full px-3 py-2 bg-white text-gray-900 rounded-l-lg focus:outline-none"
              placeholder="Start Date - End Date"
            />
            <Calendar className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Amount Range */}
        <div className="lg:col-span-2">
          <label
            htmlFor="amountFrom"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            จำนวนเงินรวม
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              id="amountFrom"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="From"
            />
            <span className="self-center text-gray-500">B</span>
            <span className="self-center text-gray-500">-</span>
            <input
              type="number"
              id="amountTo"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="To"
            />
            <span className="self-center text-gray-500">B</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
          ค้นหา
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200">
          ล้าง
        </button>
      </div>
      <ImportStatementDetail></ImportStatementDetail>
    </>
  );
}

export default Tab1;
