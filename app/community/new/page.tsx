"use client";

import Blank from "@/app/components/Blank";
import BackButton from "@/app/components/Button/BackButton";
import HeaderContainer from "@/app/components/header/HeaderContainer";
import Main from "@/app/components/Main";
import CommunityCategory from "@/app/components/CommunityCategory";
import { useEffect, useState } from "react";
import { useFooterStore } from "@/store/FooterStore";

export default function CommunityNewPage() {
  const [isUploadActive, setIsUploadActive] = useState(false);

  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const setIsHidden = useFooterStore((state) => state.setIsHidden);

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(event.target.value);
  };

  useEffect(() => {
    if (textAreaValue !== "") {
      setIsUploadActive(true);
    } else {
      setIsUploadActive(false);
    }
  }, [textAreaValue]);

  useEffect(() => {
    //setIsHidden(true);
  }, []);

  return (
    <div>
      <HeaderContainer>
        <div>
          <BackButton />
        </div>
        {!isUploadActive && (
          <div className="absolute text-[#222222]/30 right-[21px] top-[20px] text-base font-semibold tracking-[3%] ">
            게시
          </div>
        )}
        {isUploadActive && (
          <div className="absolute text-primary right-[21px] top-[20px] text-base font-bold tracking-[3%] ">
            게시
          </div>
        )}
      </HeaderContainer>
      <Blank height="30px" />
      <Main>
        <div className="text-gray300 font-medium leading-[150%] text-sm">
          질문 카테고리 선택(필수)
        </div>
        <Blank height="20px" />
        <CommunityCategory />
      </Main>
      <Blank height="30px" />
      <div className="border-b border-gray100"></div>
      <div className="">
        <textarea
          onChange={handleTextAreaChange}
          value={textAreaValue}
          rows={10}
          cols={50}
          maxLength={1000}
          placeholder="질문할 내용을 작성해 주세요.(최대 1000자 이내)"
          className="px-4 w-full bg-[#f8f8f8] pt-5 focus:border-none focus:outline-none"
        ></textarea>
      </div>
    </div>
  );
}
