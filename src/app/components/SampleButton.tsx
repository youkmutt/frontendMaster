"use client";
import React from "react";

interface SampleButtonProps {
  additional_class?: string; // Made optional as it might not always be provided
  text: string;
  onClick: () => void;
}

const SampleButton: React.FC<SampleButtonProps> = ({
  text,
  onClick,
  additional_class,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
         // เมื่อเอาเมาส์ชี้ สีพื้นหลังจะเข้มขึ้น
        text-white         // สีข้อความเป็นสีขาว
        font-bold          // ตัวหนา
        py-2               // Padding ด้านบนและล่าง 2 หน่วย
        px-4               // Padding ด้านซ้ายและขวา 4 หน่วย
        rounded-lg         // ขอบมน ขนาดใหญ่
        shadow-md          // เพิ่มเงา
        transition         // ทำให้การเปลี่ยนแปลงมีอนิเมชั่น
        duration-300       // ระยะเวลาอนิเมชั่น 300ms
        ease-in-out        // ชนิดของอนิเมชั่น
        ${additional_class || "bg-blue-600 hover:bg-blue-700"}
      `}
    >
      {text}
    </button>
  );
};

export default SampleButton;
