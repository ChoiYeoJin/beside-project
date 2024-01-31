// pages/index.tsx
import React from "react";
import MainContainer from "../components/MainContainer";
import Blank from "../components/Blank";
import Title from "../components/Title";
import Card from "../components/Card";
import HorizontalSlide from "../components/HorizontalSlide";
import Tag from "../components/Tag";
import RadioContainer from "../components/RadioContainer";
import ProgramList from "../components/ProgramList";
import Main from "../components/Main";
import Footer from "../components/Footer";
import HeaderLeftText from "../components/header/HeaderLeftText";

export default function Programs() {
  // 여기에서 props로 받은 데이터를 사용하여 페이지를 렌더링합니다.
  return (
    <>
      <HeaderLeftText text="프로그램" />
      <Main>
        <Blank height="30px" />
        <Title text="분야" />
        <Blank height="20px" />
        <div className="w-full">
          <RadioContainer
            items={["전체", "문서", "협업", "디자인", "기타", "test"]}
          />
        </div>
        <Blank height="20px" />
        <ProgramList items={["Figma", "test2", "test3", "test4"]} />
      </Main>
      <Footer />
    </>
  );
}
