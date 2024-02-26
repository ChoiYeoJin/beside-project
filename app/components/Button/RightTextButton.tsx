"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type ButtonProps = {
  text: string;
  onClick: () => void;
  isActive?: boolean;
};

export default function RightTextButton({
  text,
  onClick,
  isActive,
}: ButtonProps) {
  return (
    <div className="absolute right-[21px] top-[20px]">
      {!isActive && (
        <div
          onClick={onClick}
          className=" text-[#222222]/30  text-base font-semibold tracking-[3%] "
        >
          {text}
        </div>
      )}
      {isActive && (
        <div
          onClick={onClick}
          className=" text-primary text-base font-medium tracking-[3%] "
        >
          {text}
        </div>
      )}
    </div>
  );
}
