import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import "./style/DatePicker.css";

interface DateRangePickerProps {
  placeholder?: string;
  onChange: (start: string, end: string) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  placeholder,
  onChange,
}) => {
  const [dates, setDates] = useState<(Date | null)[] | null>(null);

  return (
    <div className="card flex justify-content-center">
      <Calendar
        showIcon={true}
        showTime={false}
        showButtonBar={true}
        value={dates}
        onChange={(e) => {
          setDates(e.value ?? null);
          if (e.value && e.value.length == 2) {
            // Format dates to dd/mm/yy
            const [start, end] = e.value;
            const startStr = start?.toLocaleDateString("en-GB") ?? "";
            const endStr = end?.toLocaleDateString("en-GB") ?? "";
            if (start != null && end != null) {
              onChange(startStr, endStr);
            }
          }
        }}
        dateFormat="dd/mm/yy"
        selectionMode="range"
        readOnlyInput
        hideOnRangeSelection
        placeholder={placeholder ?? "Start Date - End Date"}
        className="h-10"
        todayButtonClassName="calendarbtn hover:bg-fa-primary hover:text-white focus:shadow-none"
        clearButtonClassName="calendarbtn space-x-2 calendarbtn hover:bg-fa-primary hover:text-white focus:border-none focus:shadow-none"
        inputClassName="w-full rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-fa-primary hover:ring-fa-primary hover:border-fa-primary focus:border-fa-primary focus:shadow-none"
        panelClassName="font-jamjuree rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-fa-primary hover:ring-fa-primary hover:border-fa-primary focus:border-fa-primary"
      />
    </div>
  );
};

export default DateRangePicker;
