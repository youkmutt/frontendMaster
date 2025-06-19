import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";

function Tab2() {
  const [date, setDate] = useState<Nullable<Date>>(null);

  return (
    <div className="card flex justify-content-center">
      <Calendar
        value={date}
        showIcon={true}
        showTime={false}
        showButtonBar={true}
        hourFormat="24"
        onChange={(e) => setDate(e.value)}
      />
    </div>
  );
}

export default Tab2;
