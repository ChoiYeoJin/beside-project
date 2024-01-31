"use client";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";

export default function Footer({ selected }: { selected?: string }) {
  const [selectedTab, setSelectedTab] = useState("home");

  useEffect(() => {
    // 로컬 저장소에서 선택된 탭을 가져옵니다.
    const storedSelectedTab = selected ?? localStorage.getItem("selectedTab");
    if (storedSelectedTab) {
      setSelectedTab(storedSelectedTab);
    }
  }, []);

  const tabImages = {
    home: {
      name: "홈",
      default: "/icons/tapbar-icons/House.svg",
      active: "/icons/tapbar-icons/HouseChecked.svg",
    },
    programs: {
      name: "프로그램",
      default: "/icons/tapbar-icons/Layout.svg",
      active: "/icons/tapbar-icons/LayoutChecked.svg",
    },
    bookmark: {
      name: "즐겨찾기",
      default: "/icons/tapbar-icons/BookmarkSimple.svg",
      active: "/icons/tapbar-icons/BookmarkSimpleChecked.svg",
    },
    community: {
      name: "질문게시판",
      default: "/icons/tapbar-icons/ChatsCircle.svg",
      active: "/icons/tapbar-icons/ChatsCircleChecked.svg",
    },
    myPage: {
      name: "마이페이지",
      default: "/icons/tapbar-icons/User.svg",
      active: "/icons/tapbar-icons/User.svg",
    },
  };
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
    localStorage.setItem("selectedTab", tabName);
  };
  return (
    <>
      <div className="fixed bottom-0 w-full h-[82px] bg-white pt-[8px]">
        <div className="flex justify-around">
          {Object.entries(tabImages).map(([tabName, images], index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              onClick={() => handleTabClick(tabName)}
            >
              <Link href={`/${tabName}`}>
                <Image
                  src={selectedTab === tabName ? images.active : images.default}
                  alt={tabName}
                  width={28}
                  height={28}
                />
              </Link>
              <div className="text-[10px]">{images.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
