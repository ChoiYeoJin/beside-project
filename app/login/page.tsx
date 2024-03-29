"use client";
import { ChangeEvent, useState } from "react";
import Input from "../components/Input";
import { signIn, signOut, useSession } from "next-auth/react";
import ImageButton from "@/app/components/Button/ImageButton";
import axios from "axios";
import GoogleLogin from "../components/auth/GoogleLogin";
import KakaoLogin from "../components/auth/KakaoLogin";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import Blank from "../components/Blank";
import TextButton from "../components/Button/TextButton";
import { validateEmail, validatePassword } from "@/utils/validate";
import Main from "../components/Main";
import HeaderLeftText from "../components/header/HeaderLeftText";
import Link from "next/link";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/storage";

export default function Login() {
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const handleLoginButton = async (
    event?: React.MouseEvent<HTMLButtonElement>
  ) => {
    event?.preventDefault();
    if (emailError || passwordError) {
      alert("이메일 및 비밀번호를 정확히 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/accounts/api/token/`,
        {
          username: email,
          password: password,
        }
      );

      if (response.status === 200) {
        const { access, refresh } = response.data;
        loginUser(access, refresh);
        //localStorage.setItem("token", access, refresh);
        router.push("/pages/home");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <HeaderLeftText text="마이페이지" />
      <Main>
        <div className="relative max-w-[370px] mx-auto">
          <Blank height="20px" />
          <div className="absolute left-0">
            <Title text="로그인" />
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
                <Blank height="10px" />
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
                  <TextButton text="로그인" onClick={handleLoginButton} />
                </div>
              </form>
              <Blank height="10px" />
              <div className="flex gap-2 text-[14px] font-medium text-gray300 h-[52px]">
                <Link href="/register">
                  <div>회원가입</div>
                </Link>
                <div>|</div>
                <div>아이디 찾기</div>
                <div>|</div>
                <div>비밀번호 찾기</div>
              </div>
              <Blank height="40px" />
              <div className="h-[37px]">
                <div className=" text-[14px] font-medium text-gray300">
                  간편로그인
                </div>
              </div>

              <div className="flex gap-5">
                <GoogleLogin />
                <KakaoLogin />
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </div>
  );
}
