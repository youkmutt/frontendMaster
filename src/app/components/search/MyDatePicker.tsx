// components/MyDatePicker.tsx
"use client";

import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";

// Import the specific type for the 'day' context
// As we've discussed, if 'CalendarDayPassThroughMethodOptions' isn't found,
// you'll need to check node_modules/primereact/calendar/calendar.d.ts for the correct type,
// or use CalendarPassThroughMethodOptions if it's the most appropriate general type.
// For example, it might be CalendarPassThroughMethodOptions, or a different specific name.
import { CalendarProps } from "primereact/calendar"; // Keep this for now, but be ready to change based on your exact version

export default function MyDatePicker() {
  const [date, setDate] = useState<Nullable<Date>>(null);
  const [dateStr, setDateStr] = useState<Nullable<string>>(null);

  const SelectedDate = (date?: Nullable<Date>) => {
    setDate(date);
    setDateStr(
      date?.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
  };

  return (
    <div className="card flex justify-content-center p-4">
      <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-200 shadow-xl rounded-2xl">
        <Calendar
          selectionMode="single"
          dateFormat={"dd/mm/yy"}
          value={date}
          onChange={(e) => SelectedDate(e.value)}
          placeholder="Start Date - End Date"
          showIcon={true}
          showTime={false}
          showButtonBar={true}
          hourFormat="24"
          className="w-full max-w-md mx-auto"
          pt={{
            input: {
              className:
                "w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-500 text-gray-800",
            },
            dropdownButton: {
              className:
                "bg-blue-600 hover:bg-blue-700 text-white rounded-lg ml-2 px-3 py-2 flex items-center justify-center",
            },
            panel: {
              className:
                "mt-2 bg-white shadow-xl rounded-lg border border-gray-200 p-4",
            },
            header: {
              className: "flex justify-between items-center mb-4",
            },
            previousButton: {
              className:
                "p-2 rounded-full hover:bg-gray-100 transition-colors duration-200",
            },
            title: {
              className: "text-xl font-semibold text-gray-700",
            },
            nextButton: {
              className:
                "p-2 rounded-full hover:bg-gray-100 transition-colors duration-200",
            },
            weekDay: {
              className: "text-xs font-medium text-red-500 uppercase px-2 py-1",
            },
            // day: {
            //   // Explicitly type 'context' here
            //   className: ({ context }: { context: CalendarProps }) =>
            //     `p-2 text-center rounded-full transition-colors duration-200
            //       ${context.todayButtonClassName ? "border border-red-700" : ""}
            //       ${
            //         context.select
            //           ? "bg-red-700 text-white"
            //           : "hover:bg-gray-100"
            //       }
            //       ${
            //         context.yearPicker
            //           ? "text-gray-400 cursor-not-allowed opacity-60"
            //           : "text-gray-800 cursor-pointer"
            //       }
            //     `,
            // },
            // day: {
            //   className:
            //     "p-2 text-center rounded-full transition-colors duration-200 hover:bg-gray-100",
            // },
            dayLabel: {
              className: "p-1",
            },
          }}
        />

        {date && (
          <p className="mt-6 text-xl font-medium text-gray-700 text-center">
            You picked:{" "}
            <span className="text-blue-600 font-semibold">
              {date.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
