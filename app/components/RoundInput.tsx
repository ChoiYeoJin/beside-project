"use client";

import { useState } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

export default function RoundInput({
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
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
        className=" p-2 rounded-[50px] w-full h-[62px] bg-[#F8F8F8] text-[#A5A5A5] px-5  focus:border-primary focus:outline-none"
      />
      {errorMessage && (
        <p className="text-red-500 text-[10px]">{errorMessage}</p>
      )}
    </>
  );
}
