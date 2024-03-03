"use client";
import { useFooterStore } from "@/store/FooterStore";
import { useEffect } from "react";
import FooterIcon from "./icon/FooterIcon";
import Link from "next/link";

export default function Footer({ selected }: { selected?: string }) {
  const activeTab = useFooterStore((state) => state.activeTab);
  const setActiveTab = useFooterStore((state) => state.setActiveTab);

  useEffect(() => {
    // 로컬 저장소에서 선택된 탭을 가져옵니다.
    const storedSelectedTab = selected ?? activeTab;
    if (storedSelectedTab !== activeTab) {
      setActiveTab(storedSelectedTab);
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
    // community: {
    //   name: "질문게시판",
    //   default: "/icons/tapbar-icons/ChatsCircle.svg",
    //   active: "/icons/tapbar-icons/ChatsCircleChecked.svg",
    // },
    myPage: {
      name: "마이페이지",
      default: "/icons/tapbar-icons/User.svg",
      active: "/icons/tapbar-icons/UserChecked.svg",
    },
  };
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div className="h-[82px] w-full"></div>
      <div className="fixed bottom-0 w-full h-[82px] bg-white pt-[8px]">
        <div className="flex ">
          {Object.entries(tabImages).map(([tabName, images]) => (
            <div key={tabName} className="w-[25%] h-full">
              <Link href={`/pages/${tabName}`}>
                <FooterIcon
                  tabName={tabName}
                  imgSrc={
                    activeTab === tabName ? images.active : images.default
                  }
                  name={images.name}
                  onClick={handleTabClick}
                  checked={activeTab === tabName}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
