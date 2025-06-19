import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "./style/DropdownSearch.css";
import { DropdownModel } from "@/api_main";
import { Nullable } from "primereact/ts-helpers";

interface DDLSearch {
  list: DropdownModel[];
  placeholder?: string;
  onClick: (id: Nullable<number>, value: string) => void;
}

const DropdownSearch: React.FC<DDLSearch> = ({
  list,
  placeholder,
  onClick,
}) => {
  const [selected, setSelected] = useState(null);

  return (
    <Dropdown
      value={selected}
      onChange={(item) => {
        setSelected(item.value);
        onClick(item?.target?.id ? Number(item.target.id) : null, item.value);
      }}
      options={list}
      optionLabel="value"
      filter={true}
      filterIcon="none"
      placeholder={`${placeholder ?? "Please Enter"}`}
      className="h-10 ddl-search font-jamjuree md:w-14rem rounded-xl hover:border-fa-primary border-opacity-50"
    />
  );
};

export default DropdownSearch;
