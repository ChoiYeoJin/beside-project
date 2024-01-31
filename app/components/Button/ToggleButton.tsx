"use client";
import React, { useEffect, useState } from "react";

type RadioContainerProps = {
  items: string[];
  setItem?: (item: string) => void;
};

export default function RadioContainer({
  items,
  setItem,
}: RadioContainerProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item); // 선택된 항목 업데이트
    if (setItem) setItem(item);
  };

  useEffect(() => {
    setSelectedItem(items[0]);
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray100 w-[259px] h-[47px] rounded-[4px] gap-[11px]">
      {items.map((item, index) => (
        <div
          key={index}
          className={
            selectedItem === item ? "button-selected" : "button-not-selected"
          }
          onClick={() => handleItemClick(item)}
        >
          <div className="my-[10px] text-[16px]">{item}</div>
        </div>
      ))}
    </div>
  );
}
