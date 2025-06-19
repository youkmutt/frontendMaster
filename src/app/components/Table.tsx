"use client";
import React from "react";

interface TableProps {
  header: string;
  thead: TableHeaderModel[];
  additional_class?: string; // Made optional as it might not always be provided
  onClick: () => void;
}

export interface TableHeaderModel {
  position: string;
  text: string;
}

const Table: React.FC<TableProps> = ({
  header,
  thead,
  onClick,
  additional_class,
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{header}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {thead.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`${
                    item.position ?? "text-right"
                  } px-6 py-3 text-xs text-gray-500 uppercase tracking-wider`}
                >
                  {item.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
