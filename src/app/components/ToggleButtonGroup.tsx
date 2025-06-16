"use client";
import React, { useState } from "react";

interface ToggleButtonGroupProps {
  //   options: string[];
  options: {
    label: string;
    value: number;
  }[];
  defaultSelected?: number; // ตัวเลือกเริ่มต้นที่ถูกเลือก
  onSelect: (label: string, value: number) => void; // Callback เมื่อมีการเลือก
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  options,
  defaultSelected,
  onSelect,
}) => {
  const [selected, setSelected] = useState<number | undefined>(defaultSelected);

  const handleClick = (selectedText: string, selectedValue: number) => {
    setSelected(selectedValue);
    onSelect(selectedText, selectedValue);
  };

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {options.map((option, index) => (
        <button
          key={option.label}
          value={option.value}
          type="button"
          onClick={() => handleClick(option.label, option.value)}
          className={`
            px-4 py-2 text-sm font-medium
            border border-border-fa-primary
            ${
              selected === option.value
                ? "bg-fa-primary text-white hover:bg-fa-primary" // Selected state
                : "bg-white text-gray-900 hover:bg-gray-100" // Unselected state
            }
            ${index === 0 ? "rounded-l-lg" : ""}        
            ${index === options.length - 1 ? "rounded-r-lg" : ""}
            ${index > 0 ? "-ml-px" : ""} 
            
            transition-all duration-200
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
