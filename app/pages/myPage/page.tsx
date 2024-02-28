"use client";
import MainContainer from "../../components/MainContainer";
import Image from "next/image";
import useModal from "../../hooks/useModal";
import ModalController from "../../components/modal/ModalController";
import Blank from "@/app/components/Blank";
import Main from "@/app/components/Main";
import HeaderLeftText from "@/app/components/header/HeaderLeftText";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isUserLoggedIn } from "@/utils/storage";
import { useUserStore } from "@/store/UserStore";

export default function MyPage() {
  const handleNicknameEditButton = () => {
    router.push("/pages/myPage/editName");
  };
  const router = useRouter();

  const getUserProfile = useUserStore((state) => state.getUserProfile);
  const userProfile = useUserStore((state) => state.userProfile);
  useEffect(() => {
    getUserProfile();
  }, []);

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

          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="font-bold text-xl text-[#222222]">닉네임</div>
              <div className="mr-[25px]" onClick={handleNicknameEditButton}>
                <Image
                  src={"/icons/NotePencil.svg"}
                  alt="logo"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="text-sm text-gray300 ">asdf21@asdf.com</div>
          </div>
        </div>
        {/* <div className="flex justify-around">
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
        </div> */}
        <div className="w-full border border-gray100"></div>
        <Blank height="10px" />
        <div className="flex flex-col gap-[60px] py-5">
          <div className="flex justify-between">
            <p>내가 작성한 글</p>
            <div>
              <Image
                src={"/icons/CaretRight.svg"}
                alt="logo"
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <p>비밀번호 변경</p>
            <Image
              src={"/icons/CaretRight.svg"}
              alt="logo"
              width={16}
              height={16}
            />
          </div>
          <div className="flex justify-between">
            <p>이용 약관</p>
            <Image
              src={"/icons/CaretRight.svg"}
              alt="logo"
              width={16}
              height={16}
            />
          </div>
          <div className="flex justify-between">
            <p>공지사항</p>
            <Image
              src={"/icons/CaretRight.svg"}
              alt="logo"
              width={16}
              height={16}
            />
          </div>
          <div className="flex justify-between">
            <p>회원탈퇴</p>
            <Image
              src={"/icons/CaretRight.svg"}
              alt="logo"
              width={16}
              height={16}
            />
          </div>
        </div>
        <ModalController />
      </Main>
    </>
  );
}
