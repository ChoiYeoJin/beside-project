import React from "react";

type DropdownProps = {
  items: string[];
  onClick: (s: string) => void;
};

const Dropdown = ({ items, onClick }: DropdownProps) => {
  return (
    <div className="relative block z-10 bg-white">
      <div
        className="absolute z-10  bg-white  w-full py-2 rounded-md shadow-lg shadow-black/8 border border-gray-100"
        style={{ boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.08)" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-[#2B2B2B]"
            onClick={() => onClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
