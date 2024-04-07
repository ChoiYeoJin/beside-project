"use client";
import Blank from "@/app/components/Blank";
import Container from "@/app/components/Container";
import DropdownMenu from "@/app/components/Web/DropdownMenu";
import { useState } from "react";

export default function KeyListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeMenu, setActiveMenu] = useState(null);

  // 메뉴 클릭 핸들러: 메뉴 ID를 받아서 현재 활성화된 메뉴를 토글합니다.
  const handleMenuClick = (menuId) => {
    // 이미 활성화된 메뉴를 클릭하면 닫힙니다.
    setActiveMenu(menuId);
  };
  return (
    <>
      <Container>
        <div className="flex justify-center">
          <div className="flex gap-6">
            <div className="w-[280px] h-full px-5 py-[10px]">
              <Blank height="60px" />
              <div className="text-xl font-semibold">마이페이지</div>
              <Blank height="10px" />
              <DropdownMenu
                title="즐겨찾기 설정"
                onClick={() => handleMenuClick("1")}
                active={activeMenu === "1"}
              />
              <DropdownMenu
                title="계정 설정"
                childTitle={["비밀번호 변경", "회원탈퇴"]}
                onClick={() => handleMenuClick("2")}
                active={activeMenu === "2"}
              />
            </div>
            <div className="w-[588px]">
              <Blank height="60px" />
              {children}
            </div>
            <div className="w-[280px] h-full"></div>
          </div>
        </div>
      </Container>
    </>
  );
}
