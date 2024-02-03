"use client";
import { ChangeEvent, useState } from "react";
import Input from "../components/Input";

import Title from "../components/Title";
import Blank from "../components/Blank";
import TextButton from "../components/Button/TextButton";
import Main from "../components/Main";
import Header from "../components/header/Header";
import {
  validateEmail,
  validateNickname,
  validatePassword,
} from "@/utils/validate";
import HeaderContainer from "../components/header/HeaderContainer";
import BackButton from "../components/Button/BackButton";

export default function Register() {
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const handlePasswordCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    setPasswordCheckError(validatePassword(e.target.value));
  };

  const [nicknameError, setNicknameError] = useState("");
  const [nickname, setNickname] = useState("");
  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setNicknameError(validateNickname(e.target.value));
  };

  const handleLoginButton = async () => {};
  return (
    <>
      <HeaderContainer>
        <BackButton />
      </HeaderContainer>
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
                    value={passwordCheck}
                    onChange={handlePasswordCheckChange}
                    errorMessage={passwordCheckError}
                  />
                </div>
                <Blank height="40px" />
                <div className="absolute left-0">
                  <Title text="닉네임" />
                </div>
                <Blank height="40px" />
                <div>
                  <Input
                    type="text"
                    placeholder="닉네임를 입력해 주세요"
                    value={nickname}
                    onChange={handleNicknameChange}
                    errorMessage={nicknameError}
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
