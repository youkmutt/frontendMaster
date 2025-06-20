import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";

interface DateRangePickerProps {
  dateOnly?: boolean;
  placeholder?: string;
  onChange: (start: string, end: string) => void;
  clearTrigger: number;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  dateOnly,
  placeholder,
  onChange,
  clearTrigger,
}) => {
  useEffect(() => {
    setDates(null);
  }, [clearTrigger]);

  const [dates, setDates] = useState<(Date | null)[] | null>(null);
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const yy = String(date.getFullYear());
    const MM = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const HH = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    return dateOnly == true
      ? `${yy}-${MM}-${dd}`
      : `${yy}-${MM}-${dd} ${HH}:${mm}:${ss}`;
  };

  return (
    <div className="card flex justify-content-center">
      <style>{`
        button[aria-label="Choose Date"][data-pc-name="button"][data-pc-section="root"] {
          background-color: transparent;
          border-color: #d1d5db;
          border-radius: 0.5rem;
          color: #e3325c;
          font-family:
            Bai Jamjuree,
            sans-serif;
        }

        button:hover[aria-label="Choose Date"][data-pc-name="button"][data-pc-section="root"]  {
          border-color: #d1d5db;
          border-radius: 0.5rem;
          color: white;
          background-color: #e3325c;
        }

        button:focus[aria-label="Choose Date"][data-pc-name="button"][data-pc-section="root"]  {
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
      `}</style>
      <Calendar
        showIcon={true}
        showTime={false}
        showButtonBar={true}
        value={dates}
        onChange={(e) => {
          setDates(e.value ?? null);
          if (e.value && e.value.length == 2) {
            const [start, end] = e.value;
            // const startStr = start?.toLocaleDateString("en-GB") ?? "";
            // const endStr = end?.toLocaleDateString("en-GB") ?? "";
            const startStr = formatDate(start);
            const endStr = formatDate(end);
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
        icon={() => <i className="pi pi-calendar" />}
        style={{ background: "transparent" }}
        pt={{
          buttonbar: {
            className: "flex justify-between px-3",
          },
          dayLabel: {
            className:
              "rounded-full transition-colors duration-150 ease-in-out hover:bg-fa-primary/10 text-gray-800 focus:text-red-500 data-[p-highlight=true]:!text-white data-[p-highlight=true]:!bg-fa-primary",
          },
          monthTitle: { className: "hover:text-fa-primary" },
          yearTitle: { className: "hover:text-fa-primary" },
          previousIcon: { className: "text-fa-primary" },
          nextButton: { className: "!text-fa-primary" },
        }}
      />
    </div>
  );
};

export default DateRangePicker;
