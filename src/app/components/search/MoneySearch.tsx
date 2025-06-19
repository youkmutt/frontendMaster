"use client";
import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import "./style/MoneySearch.css";

interface MoneySearchProps {
  label?: string;
  onChange: (value: string) => void;
}

const MoneySearch: React.FC<MoneySearchProps> = ({ label, onChange }) => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <>
      {label && (
        <label className="text-sm text-left text-gray-700">{label}</label>
      )}
      <div className="relative">
        <InputNumber
          unstyled={false}
          inputId="currency-us"
          value={value}
          //   minFractionDigits={2}
          onValueChange={(e) => {
            setValue(e.value ?? null);
            onChange(e.value != null ? String(e.value) : "");
          }}
          inputClassName="w-full !p-2 !rounded-xl "
        />
        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-5 text-gray-400">
          ฿
        </span>
      </div>
    </>
  );
};

export default MoneySearch;
