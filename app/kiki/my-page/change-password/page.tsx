"use client";
import Blank from "@/app/components/Blank";
import Input from "@/app/components/Input";
import RoundInput from "@/app/components/RoundInput";
import Title from "@/app/components/Web/Title";
import { validatePassword } from "@/utils/validate";
import { ChangeEvent, useState } from "react";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [newPasswordConfirmError, setNewPasswordConfirmError] = useState("");

  const handleCurrentPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
    validatePassword(e.target.value);
    setCurrentPasswordError(validatePassword(e.target.value));
  };

  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
    validatePassword(e.target.value);
    setNewPasswordError(validatePassword(e.target.value));
  };

  const handleNewPasswordConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPasswordConfirm(e.target.value);
    if (e.target.value !== newPassword) {
      setNewPasswordConfirmError("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div>
      <Blank height="60px" />
      <Title text="현재 비밀번호" />
      <Blank height="20px" />
      <Input
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        value={currentPassword}
        onChange={handleCurrentPasswordChange}
        errorMessage={currentPasswordError}
        isPassword={true}
      />
      <Blank height="30px" />
      <Title text="새 비밀번호" />
      <Blank height="20px" />
      <Input
        type="password"
        placeholder="새 비밀번호를 입력해 주세요."
        value={newPassword}
        onChange={handleNewPasswordChange}
        errorMessage={newPasswordError}
        isPassword={true}
      />
      <Blank height="30px" />
      <Title text="새 비밀번호 확인" />
      <Blank height="20px" />
      <Input
        type="password"
        placeholder="새 비밀번호를 한번 더입력해 주세요."
        value={newPasswordConfirm}
        onChange={handleNewPasswordConfirmChange}
        errorMessage={newPasswordConfirmError}
        isPassword={true}
      />
    </div>
  );
}
