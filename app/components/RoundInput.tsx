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
        className=" p-2 rounded-lg w-full h-[50px] border border-gray100 text-gray300 px-5  focus:border-primary focus:outline-none"
      />
      {errorMessage && (
        <p className="text-red-500 text-[10px]">{errorMessage}</p>
      )}
    </>
  );
}
