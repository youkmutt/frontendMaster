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
    <>
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
        className="p-2 border border-gray-300 rounded-xl"
      />
    </>
  );
};

export default TextSearch;
