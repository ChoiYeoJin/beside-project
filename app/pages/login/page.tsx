"use client";
import { ChangeEvent, useState } from "react";
import Input from "../../components/Input";

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
    <>
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
    </>
  );
}
