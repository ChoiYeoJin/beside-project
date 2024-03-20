"use client";

import { useState } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  color?: string;
};

export default function RoundInput({
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
  color,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <>
      <input
        onFocus={handleFocus}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={` p-2 rounded-[50px] w-full h-[62px] px-5 ${
          color === "white" ? "bg-white border  border-primary" : "bg-[#F8F8F8]"
        } bg-[#F8F8F8] text-[#A5A5A5]  border-primary outline-none`}
      />
      {errorMessage && (
        <p className="text-red-500 text-[10px]">{errorMessage}</p>
      )}
    </>
  );
}
