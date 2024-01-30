"use client";
import { ChangeEvent, useState } from "react";
import Input from "../components/Input";
import { signIn, signOut, useSession } from "next-auth/react";
import ImageButton from "@/app/components/Button/ImageButton";
import axios from "axios";
import GoogleLogin from "../components/auth/GoogleLogin";
import KakaoLogin from "../components/auth/KakaoLogin";
import NaverLogin from "../components/auth/NaverLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center space-y-1 mx-2 max-w-80">
        <form>
          <Input
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="비밀번호을 입력해 주세요"
            value={password}
            onChange={handlePasswordChange}
          />
        </form>
        <GoogleLogin />
        <KakaoLogin />
        <NaverLogin />
      </div>
    </div>
  );
}
