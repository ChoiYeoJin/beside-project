"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <div onClick={handleBackClick} className="left-[16px] top-[18px] absolute">
      <Image
        src="/icons/chevron-back.png"
        alt="뒤로가기"
        width={24}
        height={24}
      />
    </div>
  );
}
