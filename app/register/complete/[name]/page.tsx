"use client";
import { ChangeEvent, useState } from "react";
import Input from "@/app/components/Input";
import { signIn, signOut, useSession } from "next-auth/react";
import ImageButton from "@/app/components/Button/ImageButton";
import axios from "axios";
import GoogleLogin from "@/app/components/auth/GoogleLogin";
import KakaoLogin from "@/app/components/auth/KakaoLogin";
import NaverLogin from "@/app/components/auth/NaverLogin";
import MainContainer from "@/app/components/MainContainer";
import Title from "@/app/components/Title";
import Blank from "@/app/components/Blank";
import TextButton from "@/app/components/Button/TextButton";
import Main from "@/app/components/Main";
import Header from "@/app/components/header/Header";
import HeaderContainer from "@/app/components/header/HeaderContainer";
import BackButton from "@/app/components/Button/BackButton";
import Image from "next/image";
import BottomButton from "@/app/components/Button/ButtonButton";
import { useRouter } from "next/navigation";

export default function RegisterComplete({
  params,
}: {
  params: { name: string };
}) {
  const router = useRouter();
  const handleLoginButton = () => {
    router.push("/login");
  };
  return (
    <>
      <HeaderContainer>
        <BackButton />
      </HeaderContainer>

      <div className="px-[30px] py-[36px]">
        <Image src="/icons/logo.svg" width={80} height={30} alt="logo" />
        <Blank height="40px" />
        <div className="text-xl font-semibold  text-[#222222]">
          <p className="text-primary inline leading-9">
            {decodeURIComponent(params.name)}&nbsp;
          </p>
          님
          <br />
          가입이 완료되었습니다!
        </div>
        <Blank height="10px" />
        <div className="text-[15px] leading-6 text-gray300 font-regular">
          가입한 아이디로 로그인 하시면
          <br />
          즐겨찾기와 질문게시판을 이용하실 수 있습니다.
        </div>
      </div>
      <BottomButton
        text="로그인 화면으로 이동하기"
        color="white"
        backgroundColor="#33C481"
        onClick={handleLoginButton}
      />
    </>
  );
}
