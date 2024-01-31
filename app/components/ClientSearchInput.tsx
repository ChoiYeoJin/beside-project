"use client";
import { useState } from "react";
import Input from "./Input";
import Image from "next/image";
export default function ClientSearchInput() {
  const [search, setSearch] = useState<string>("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="궁금한 기능을 입력해 보세요."
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
