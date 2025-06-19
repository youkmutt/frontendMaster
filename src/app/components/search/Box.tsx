"use client";
import React, { useState, ReactNode } from "react";

interface BoxProps {
  label?: string;
  component: ReactNode;
}

const Box: React.FC<BoxProps> = ({ label, component }) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm text-left font-jamjuree text-gray-700">
          {label}
        </label>
      )}
      {component}
    </div>
  );
};

export default Box;
