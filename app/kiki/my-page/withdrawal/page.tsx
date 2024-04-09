"use client";
import Blank from "@/app/components/Blank";
import TextButton from "@/app/components/Button/TextButton";
import GreenBlackText from "@/app/components/GreenBlackText";
import { fetchDataAuthorized } from "@/utils/fetch";
import { isUserLoggedIn } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

type ProfileResponse = {
  message: "string";
  user: Profile;
};

export default function Withdrawal() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const {
    data: profile,
    isLoading,
    error,
  } = useQuery<ProfileResponse, Error>(
    "profile",
    () => fetchDataAuthorized<ProfileResponse>("/mypage/token"),
    {
      enabled: isLogin,
      staleTime: Infinity,
    }
  );

  const handleClickWithdrawalButton = () => {
    //home으로 가고 탈퇴api 들어가야함
  };

  useEffect(() => {
    if (isUserLoggedIn()) {
      setIsLogin(true);
    }
    console.log(profile);
  }, [profile]);

  return (
    <div>
      <Blank height="20px" />
      <div className="flex">
        <div className="text-[20px] font-semibold leading-7">
          {profile?.user.username}
        </div>
        <div className="text-[20px] font-semibold ml-[10px] leading-7">님</div>
      </div>
      <div className="text-[20px] font-semibold leading-7">
        정말로 탈퇴하시겠어요?
      </div>
      <Blank height="10px" />
      <div>탈퇴하기 전, 꼭 확인해 주세요.</div>
      <Blank height="40px" />
      <div className="flex flex-col items-center w-full gap-[10px]">
        <div className="flex items-center justify-between w-full border border-[#EEEEEE] bg-white h-[96px] px-[30px] py-[10px] rounded-lg">
          <div className="flex flex-col text-[16px] ">
            <div className="">지금까지 즐겨찾기한</div>
            <div className="font-bold">프로그램</div>
          </div>
          <GreenBlackText green="10" black="개" />
        </div>
        <div className="flex items-center justify-between w-full border border-[#EEEEEE] bg-white h-[96px] px-[30px] py-[10px] rounded-lg">
          <div className="flex flex-col text-[16px] ">
            <div className="">지금까지 즐겨찾기한</div>
            <div className="font-bold">단축키</div>
          </div>
          <GreenBlackText green="10" black="개" />
        </div>
      </div>
      <Blank height="40px" />
      <div className="leading-6 text-[#FF5C5C]">
        탈퇴하시면 지금까지 저장한 모든 데이터가 삭제됩니다.
      </div>
      <div className="leading-6 text-[#FF5C5C]">
        그래도 회원탈퇴를 진행할까요?
      </div>
      <Blank height="60px" />
      <TextButton text="탈퇴 진행하기" onClick={() => {}} color="#A5A5A5" />
    </div>
  );
}
