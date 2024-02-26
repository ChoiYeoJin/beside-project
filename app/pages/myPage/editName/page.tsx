"use client";
import Blank from "@/app/components/Blank";
import BackButton from "@/app/components/Button/BackButton";
import RightTextButton from "@/app/components/Button/RightTextButton";
import Container from "@/app/components/Container";
import Input from "@/app/components/Input";
import Main from "@/app/components/Main";
import MainContainer from "@/app/components/MainContainer";
import Title from "@/app/components/Title";
import HeaderContainer from "@/app/components/header/HeaderContainer";
import { validateNickname } from "@/utils/validate";
import { ChangeEvent, useState } from "react";

export default function EditName() {
  const [isActive, setIsActive] = useState(false);
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    let validate = validateNickname(e.target.value);
    if (validate === "") {
      setIsActive(true);
    }
    setNicknameError(validate);
  };

  return (
    <Container>
      <HeaderContainer>
        <BackButton />
        <RightTextButton text="저장" onClick={() => {}} isActive={isActive} />
      </HeaderContainer>

      <Main>
        <Blank height="30px" />
        <Title text="닉네임" />
        <Blank height="10px" />
        <Input
          value={nickname}
          onChange={handleNicknameChange}
          placeholder="새 닉네임을 작성해 주세요"
          type="text"
          errorMessage={nicknameError}
        />
      </Main>
    </Container>
  );
}
