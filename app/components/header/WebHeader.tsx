"use client";

import Image from "next/image";

export default function WebHeader() {
  return (
    <header className="w-full h-[80px] px-[120px]">
      <p className="py-[28px]">
        <Image
          src={"/icons/web-icons/Frame 920.svg"}
          alt="logo"
          width={94}
          height={24}
        />
      </p>
      <div></div>
    </header>
  );
}
