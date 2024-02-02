"use client";
import { useState } from "react";
import Input from "./Input";
import Image from "next/image";
import RoundInput from "./RoundInput";

type ClientSearchInputProps = {
  onChange: (value: string) => void;
  placeholder?: string;
};
export default function ClientSearchInput({
  onChange,
  placeholder,
}: ClientSearchInputProps) {
  const [search, setSearch] = useState<string>("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="relative">
      <RoundInput
        type="text"
        placeholder={placeholder ?? "어떤 프로그램을 찾아볼까요?"}
        onChange={handleSearch}
        value={search}
      />
      <div className="absolute right-[16px] -translate-y-9">
        <Image
          src="/icons/MagnifyingGlass.svg"
          alt="search"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
