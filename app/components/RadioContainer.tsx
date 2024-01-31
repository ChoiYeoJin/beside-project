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
    <div className="overflow-x-auto whitespace-nowrap scroll-snap-x mx-[-16px]">
      {items.map((item, index) => {
        if (index === 0) {
          return (
            <div
              key={index}
              className={`inline-block scroll-snap-align mr-[10px] ml-4 ${
                selectedItem === item ? "selected" : "not-selected"
              }`}
              onClick={() => handleItemClick(item)}
            >
              <div className="my-[10px] mx-[12px] text-[16px]">{item}</div>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className={`inline-block scroll-snap-align mr-[10px] ${
                selectedItem === item ? "selected" : "not-selected"
              }`}
              onClick={() => handleItemClick(item)}
            >
              <div className="my-[10px] mx-[12px] text-[16px]">{item}</div>
            </div>
          );
        }
      })}
    </div>
  );
}
