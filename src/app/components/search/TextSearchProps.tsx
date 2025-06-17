"use client";
import React, { useState } from "react";

interface TextSearchProps {
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const TextSearch: React.FC<TextSearchProps> = ({
  label,
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm text-left text-gray-700">{label}</label>
      )}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className="p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-fa"
      />
    </div>
  );
};

export default TextSearch;
