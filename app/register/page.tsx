"use client";
import { ChangeEvent, useState } from "react";
import Input from "../components/Input";
import { signIn, signOut, useSession } from "next-auth/react";
import ImageButton from "@/app/components/Button/ImageButton";
import axios from "axios";
import GoogleLogin from "../components/auth/GoogleLogin";
import KakaoLogin from "../components/auth/KakaoLogin";
import NaverLogin from "../components/auth/NaverLogin";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import Blank from "../components/Blank";
import TextButton from "../components/Button/TextButton";
import Main from "../components/Main";
import Header from "../components/header/Header";

export default function Register() {
  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState("");
  // 비밀번호 유효성 검사 함수

  const [email, setEmail] = useState("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

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
              <form className="w-full">
                <div>
                  <Input
                    type="email"
                    placeholder="이메일을 입력해 주세요"
                    value={email}
                    onChange={handleEmailChange}
                    errorMessage={emailError}
                  />
                </div>
                <Blank height="40px" />
                <div className="absolute left-0">
                  <Title text="비밀번호" />
                </div>
                <Blank height="40px" />
                <div>
                  <Input
                    type="password"
                    placeholder="비밀번호을 입력해 주세요"
                    value={password}
                    onChange={handlePasswordChange}
                    errorMessage={passwordError}
                  />
                </div>
                <Blank height="20px" />
                <div>
                  <Input
                    type="password"
                    placeholder="비밀번호를 확인해 주세요"
                    value={password}
                    onChange={handlePasswordChange}
                    errorMessage={passwordError}
                  />
                </div>
                <Blank height="40px" />
                <div className="absolute left-0">
                  <Title text="닉네임" />
                </div>
                <Blank height="40px" />
                <div>
                  <Input
                    type="password"
                    placeholder="비밀번호를 확인해 주세요"
                    value={password}
                    onChange={handlePasswordChange}
                    errorMessage={passwordError}
                  />
                </div>
                <Blank height="40px" />

                <div className="fixed bottom-1 left-0 right-0 px-[16px]">
                  <TextButton text="회원가입" onClick={handleLoginButton} />
                </div>
              </form>
              <Blank height="10px" />
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
