"use client";
import React, { useState } from "react";

interface InputTextProps {
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-lg text-left font-jamjuree font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-fa-primary"
      />
    </div>
  );
};

export default InputText;
