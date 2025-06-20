"use client";
import React, { useEffect, useState } from "react";

interface TextSearchProps {
  label?: string;
  placeholder?: string;
  onChange: (value: string | undefined) => void;
  clearTrigger: number;
}

const TextSearch: React.FC<TextSearchProps> = ({
  label,
  placeholder,
  onChange,
  clearTrigger,
}) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [clearTrigger]);

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
          onChange(e.target.value == "" ? undefined : e.target.value);
        }}
        className="h-10 p-2 border border-gray-300 rounded-xl"
      />
    </>
  );
};

export default TextSearch;
