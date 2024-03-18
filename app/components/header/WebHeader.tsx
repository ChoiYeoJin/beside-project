"use client";

import Image from "next/image";
import BoxButton from "../Button/BoxButton";

export default function WebHeader() {
  return (
    <header className="w-full h-[80px] px-[120px] border-b border-[#EEEEEE]">
      <div className="flex justify-between">
        <p className="py-[28px]">
          <Image
            src={"/icons/web-icons/Frame 920.svg"}
            alt="logo"
            width={94}
            height={24}
          />
        </p>
        <div className="flex py-[20px]">
          <div>
            <BoxButton text="로그인" color="#ffffff" />
          </div>
          <div>
            <BoxButton text="회원가입" color="#F8F8F8" bold={true} />
          </div>
        </div>
      </div>
    </header>
  );
}
