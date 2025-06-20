"use client";
import React, { useEffect, useId, useState } from "react";
import { InputNumber } from "primereact/inputnumber";

interface MoneySearchProps {
  label?: string;
  onChange: (value: number | undefined) => void;
  clearTrigger: number;
}

const MoneySearch: React.FC<MoneySearchProps> = ({
  label,
  onChange,
  clearTrigger,
}) => {
  const autoId = useId();
  const [value, setValue] = useState<number | null>(null);
  useEffect(() => {
    setValue(null);
  }, [clearTrigger]);

  return (
    <>
      {label && (
        <label htmlFor={autoId} className="text-sm text-left text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <InputNumber
          id={autoId}
          unstyled={false}
          inputId={autoId}
          value={value}
          //   minFractionDigits={2}
          onValueChange={(e) => {
            setValue(e.value ?? null);
            onChange(e.value ?? undefined);
          }}
          inputClassName="w-full !p-2 !rounded-xl hover:border-fa-primary focus:border-fa-primary focus:shadow-none"
        />
        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-5 text-gray-400">
          ฿
        </span>
      </div>
    </>
  );
};

export default MoneySearch;
