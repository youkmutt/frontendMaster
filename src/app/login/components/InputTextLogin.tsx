"use client";
import React, { useState, KeyboardEvent } from "react";

interface InputTextLogin {
  type?: string;
  label?: string;
  placeholder?: string;
  validator?: boolean;
  validate_txt?: string;
  onChange: (value: string) => void;
  onEnter: () => void;
}

const InputTextLogin: React.FC<InputTextLogin> = ({
  type,
  label,
  placeholder,
  validator,
  validate_txt,
  onChange,
  onEnter,
}) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onEnter();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-lg text-left font-jamjuree font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type || "text"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value); // ✅ update internal state
          onChange(e.target.value); // ✅ notify parent
        }}
        onKeyDown={handleKeyDown}
        className={`px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-fa ${
          !validator || "border-fa-primary"
        } `}
      />
      {validator && (
        <small className="text-fa-primary text-left font-jamjuree font-medium">
          {validate_txt}
        </small>
      )}
    </div>
  );
};

export default InputTextLogin;
