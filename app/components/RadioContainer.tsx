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
    <div className="flex gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={selectedItem === item ? "selected" : "not-selected"}
          onClick={() => handleItemClick(item)}
        >
          <div className="m-[10px] font-bold text-[16px]">{item}</div>
        </div>
      ))}
    </div>
  );
}
