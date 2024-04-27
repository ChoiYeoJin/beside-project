"use client";
import { useEffect, useState } from "react";
import Input from "./Input";
import Image from "next/image";
import RoundInput from "./RoundInput";

type ClientSearchInputProps = {
  onChange: (value: string) => void;
  placeholder?: string;
  color?: string;
  value?: string;
};
export default function ClientSearchInput({
  onChange,
  placeholder,
  color,
  value,
}: ClientSearchInputProps) {
  const [search, setSearch] = useState<string>("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onChange(event.target.value);
  };

  useEffect(() => {
    if (value) {
      setSearch(value);
    }
  }, [value]);

  return (
    <div className="relative z-0">
      <RoundInput
        type="text"
        placeholder={placeholder ?? "어떤 프로그램을 찾아볼까요?"}
        onChange={handleSearch}
        value={search}
        color={color}
      />
      <div className="absolute right-[30px] -translate-y-1/2 top-1/2">
        <Image
          src="/icons/MagnifyingGlass.svg"
          alt="search"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
}
