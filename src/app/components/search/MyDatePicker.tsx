"use client";

import React, { useState } from "react";
import {
  Calendar,
  CalendarPassThroughMethodOptions,
} from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { ContextMenu } from "primereact/contextmenu";

export default function MyDatePicker() {
  const [date, setDate] = useState<Nullable<Date>>(null);

  return (
    <div className="card flex flex-col justify-content-center">
      <Calendar
        value={date}
        showIcon={true}
        showTime={false}
        showButtonBar={true}
        hourFormat="24"
        onChange={(e) => setDate(e.value)}
      />
    </div>
    // <div className="card flex justify-content-center">
    //   <Calendar
    //     selectionMode="single"
    //     showOnFocus={true}
    //     dateFormat={"dd/mm/yy"}
    //     value={date}
    //     onChange={(e) => SelectedDate(e.value)}
    //     placeholder="Start Date - End Date"
    //     showIcon={true}
    //     showTime={false}
    //     showButtonBar={true}
    //     hourFormat="24"
    //     className="w-full max-w-md mx-auto"
    //     pt={{
    //       input: {
    //         className:
    //           "w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-500 text-gray-800",
    //       },
    //       panel: {
    //         className:
    //           "mt-2 bg-white shadow-xl rounded-lg border border-gray-200 p-4",
    //       },
    //       header: {
    //         className: "flex justify-between items-center mb-4",
    //       },
    //       previousButton: {
    //         className:
    //           "p-2 rounded-full hover:bg-gray-100 transition-colors duration-200",
    //       },
    //       title: {
    //         className: "text-xl font-semibold text-gray-700",
    //       },
    //       nextButton: {
    //         className:
    //           "p-2 rounded-full hover:bg-gray-100 transition-colors duration-200",
    //       },
    //       weekDay: {
    //         className: "text-xs font-medium text-red-500 uppercase px-2 py-1",
    //       },
    //     }}
    //   />
    // </div>
  );
}
