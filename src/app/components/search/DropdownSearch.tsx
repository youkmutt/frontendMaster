import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { DropdownModel } from "@/api_main";
import { Nullable } from "primereact/ts-helpers";
import { classNames } from "primereact/utils";

interface DDLSearch {
  list: DropdownModel[];
  placeholder?: string;
  onClick: (id: Nullable<number>, value: string) => void;
  clearTrigger: number;
}

const DropdownSearch: React.FC<DDLSearch> = ({
  list,
  placeholder,
  onClick,
  clearTrigger,
}) => {
  const [selected, setSelected] = useState<DropdownModel | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [clearTrigger]);

  return (
    <Dropdown
      inputId="rows"
      value={selected}
      onChange={(e) => {
        setSelected(e.value);
        onClick(e.value, list.find((x) => x.id === e.value)?.value ?? "");
      }}
      dataKey="id"
      options={list}
      optionLabel="value"
      optionValue="id"
      filter={true}
      filterIcon="none"
      placeholder={`${placeholder ?? "Please Enter"}`}
      className="focus:border-fa-primary hover:border-fa-primary md:w-full h-10 md:h-10 border border-inpt rounded-xl justify-items-center"
      itemTemplate={(selectedItem) => (
        <span className={"translate-y-[-4px] transition-all duration-200"}>
          {selectedItem?.value || "Select a value"}
        </span>
      )}
      valueTemplate={(selectedItem) => (
        <span className={"translate-y-[-4px] transition-all duration-200"}>
          {selectedItem?.value || "Select a value"}
        </span>
      )}
      pt={{
        input: {
          className: !selected
            ? "font-jamjuree !text-gray-400"
            : "font-jamjuree text-black",
        },
        item: (options) => {
          const isSelected = options?.context?.selected;
          return {
            className: isSelected
              ? "bg-fa-primary text-white font-jamjuree"
              : "hover:bg-rose-100 text-black font-jamjuree",
          };
        },
      }}
    />
  );
};

export default DropdownSearch;
