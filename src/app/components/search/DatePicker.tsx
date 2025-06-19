"use client";

import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import "./style/DatePicker.css";

interface DatePickerProps {
  onChange: (value: Nullable<string>) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onChange }) => {
  const [date, setDate] = useState<Nullable<Date>>(null);

  return (
    <Calendar
      showOnFocus={true}
      value={date}
      showIcon={true}
      showTime={false}
      showButtonBar={true}
      dateFormat="dd/mm/yy"
      hourFormat="24"
      className="font-jamjuree h-10 flex flex-row focus:shadow-none"
      onChange={(e) => {
        onChange(
          e?.value?.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
        );
        setDate(e.value);
      }}
      placeholder="Start Date - End Date"
      todayButtonClassName="font-jamjuree calendarbtn hover:bg-fa-primary hover:text-white focus:shadow-none"
      clearButtonClassName="font-jamjuree calendarbtn space-x-2 calendarbtn hover:bg-fa-primary hover:text-white focus:border-none focus:shadow-none"
      inputClassName="font-jamjuree rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-fa-primary hover:ring-fa-primary hover:border-fa-primary focus:border-fa-primary focus:shadow-none"
      panelClassName="font-jamjuree rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-fa-primary hover:ring-fa-primary hover:border-fa-primary focus:border-fa-primary"
    />
  );
};

export default DatePicker;
