function ImportStatementDetail() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        ประวัติการนำเข้า
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ลำดับ
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                วันที่นำเข้าข้อมูล
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                บัญชีเงินฝาก
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ชื่อไฟล์
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ช่วงเวลาข้อมูล
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                จำนวนเงินรวม
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                สถานะ
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                รายการ
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Example Row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2023-10-26
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Main Account
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                statement_oct.csv
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2023-10-01 - 2023-10-25
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                1,234,567.89
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  สำเร็จ
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900">
                  ดูรายละเอียด
                </button>
              </td>
            </tr>
            {/* More rows can be added here */}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-upload mr-2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
          </svg>
          นำเข้าข้อมูล
        </button>
      </div>
    </div>
  );
}

export default ImportStatementDetail;
