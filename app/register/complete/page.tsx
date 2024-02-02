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

export default function Register() {
  const handleLoginButton = async () => {};
  return (
    <>
      <Header isArrow={true} text="가입하기" />
      <Main>
        <div className="relative max-w-[370px] mx-auto">
          <Blank height="20px" />
          <div className="absolute left-0">
            <Title text="아이디(이메일)" />
          </div>
          <Blank height="40px" />
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center space-y-1 w-full ">
              <div className="fixed bottom-1 left-0 right-0 px-[16px]">
                <TextButton text="회원가입" onClick={handleLoginButton} />
              </div>

              <Blank height="10px" />
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
