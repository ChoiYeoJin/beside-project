"use client";
import { useState } from "react";
import Input from "../../components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form>
        <Input
          type="email"
          placeholder="이메일을 입력해 주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호을 입력해 주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </>
  );
}
