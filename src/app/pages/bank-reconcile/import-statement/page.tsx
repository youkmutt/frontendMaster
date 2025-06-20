"use client";

import { useState } from "react";
import Tab1 from "./components/tab1";
import Tab2 from "./cancle/tab2";
import SampleButton from "@/app/components/SampleButton";
import { useLoading } from "@/app/context/LoadingContext";

function ImportStatement() {
  const { setLoading } = useLoading();
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="bg-gray-100 rounded-md">
      <div className="flex border-gray-300 mb-2">
        <SampleButton
          text="ไฟล์นำเข้า"
          onClick={() => {
            setActiveTab("tab1");
          }}
          additional_class={`mr-2 font-semibold ${
            activeTab === "tab1"
              ? "rounded-t-md text-white"
              : "rounded-t-md bg-white text-fa-primary hover:text-white"
          }`}
        ></SampleButton>
        <SampleButton
          text="ยกเลิก"
          onClick={() => setActiveTab("tab2")}
          additional_class={`mr-2 font-semibold ${
            activeTab === "tab2"
              ? "rounded-t-md text-white"
              : "rounded-t-md bg-white text-fa-primary hover:text-white"
          }`}
        ></SampleButton>
      </div>

      <div className="p-4 border border-gray-300 rounded-xl bg-white">
        {activeTab === "tab1" && <Tab1></Tab1>}
        {activeTab === "tab2" && <Tab2></Tab2>}
      </div>
    </div>
  );
}

export default ImportStatement;
