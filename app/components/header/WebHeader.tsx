"use client";

import Image from "next/image";
import BoxButton from "../Button/BoxButton";
import { useRouter } from "next/navigation";
import { isUserLoggedIn } from "@/utils/storage";
import { useState } from "react";

export default function WebHeader() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isUserLoggedIn());

  const handleLoginButtonClick = () => {
    router.push("/login");
  };

  const handleJoinButtonClick = () => {
    router.push("/register");
  };

  const handleLogoClick = () => {
    router.push("/kiki");
  };

  return (
    <header className="w-full h-[80px] px-[120px] border-b border-[#EEEEEE]">
      <div className="flex justify-between">
        <p className="py-[28px]  cursor-pointer" onClick={handleLogoClick}>
          <Image
            src={"/icons/web-icons/Frame 920.svg"}
            alt="logo"
            width={94}
            height={24}
          />
        </p>
        <div className="flex py-[20px]">
          <div>
            <BoxButton
              text="로그인"
              color="#ffffff"
              onClick={handleLoginButtonClick}
            />
          </div>
          <div>
            <BoxButton
              text="회원가입"
              color="#F8F8F8"
              bold={true}
              onClick={handleJoinButtonClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
