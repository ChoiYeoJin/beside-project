"use client";
import MainContainer from "../../components/MainContainer";
import Image from "next/image";
import useModal from "../../hooks/useModal";
import ModalController from "../../components/modal/ModalController";
import Blank from "@/app/components/Blank";
import Main from "@/app/components/Main";
import HeaderLeftText from "@/app/components/header/HeaderLeftText";

export default function MyPage() {
  return (
    <>
      <HeaderLeftText text="마이페이지" />
      <Main>
        <Blank height="20px" />
        <div className="flex items-center bg-white rounded-[10px] py-[20px]">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden m-4">
            <Image
              src={"/icons/User-30.svg"}
              alt={"profile"}
              width={50}
              height={50}
            />
          </div>
          <div>
            <div className="font-bold text-xl text-[#222222]">닉네임</div>
            <div className="text-sm text-gray300 ">asdf21@asdf.com</div>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col items-center justify-center py-6 gap-[10px]">
            <div className="text-primary text-xl font-bold">23</div>
            <div className="text-gray300 text-xs font-medium">작성한 글</div>
          </div>
          <div className="flex flex-col items-center justify-center py-6 gap-[10px]">
            <div className="text-primary text-xl font-bold">23</div>
            <div className="text-gray300 text-xs font-medium">작성한 댓글</div>
          </div>
          <div className="flex flex-col items-center justify-center py-6 gap-[10px]">
            <div className="text-primary text-xl font-bold">23</div>
            <div className="text-gray300 text-xs font-medium">좋아요</div>
          </div>
        </div>
        <div className="w-full border border-gray100"></div>
        <Blank height="10px" />
        <div className="flex flex-col gap-[60px] py-5">
          <div className="">
            <p>내가 작성한 글</p>
          </div>
          <div>
            <p>비밀번호 변경</p>
          </div>
          <div>
            <p>이용 약관</p>
          </div>
          <div>
            <p>공지사항</p>
          </div>
        </div>
        <ModalController />
      </Main>
    </>
  );
}
