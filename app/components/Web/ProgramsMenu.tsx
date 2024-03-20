"use client";

import fetchData from "@/utils/fetch";
import { useEffect, useState } from "react";
import Image from "next/image";
import Blank from "../Blank";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ProgramsMenu() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [platform, setPlatform] = useState<string>("");
  const pathname = usePathname(); // "program"이 동적 경로 세그먼트입니다.

  useEffect(() => {
    async function loadPrograms() {
      // URL에 "program"이 존재할 경우에만 fetchData 호출
      const programsData = await fetchData<Program[]>(
        `/shortcut-keys/programs`
      );
      setPrograms(programsData);
    }

    const splited = pathname.split("/");
    setPlatform(splited.pop() as string);

    loadPrograms();
  }, [pathname]); // "program" 값의 변경을 감지하여 useEffect 재실행

  return (
    <div className="flex flex-col  w-full h-full">
      <Blank height="60px" />
      <div className="flex font-semibold text-base py-[10px] px-5 leading-6">
        프로그램
      </div>
      {programs.map((item) => (
        <Link key={item.platform} href={`/kiki/key-list/${item.platform}`}>
          <div
            key={item.platform}
            className={`flex items-center py-[11px] px-5 rounded-[8px] h-[44px] ${
              item.platform === platform ? "bg-[#F8F8F8]" : ""
            }`}
          >
            <div className="mr-[15px]">
              <Image src={item.image_url} alt="logo" width={24} height={24} />
            </div>
            <div className="text-base font-semibold leading-6">
              {item.platform}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
