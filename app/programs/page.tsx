// pages/index.tsx
import React from "react";
import MainContainer from "../components/MainContainer";
import Blank from "../components/Blank";
import Title from "../components/Title";
import Card from "../components/Card";
import HorizontalSlide from "../components/HorizontalSlide";
import Tag from "../components/Tag";

export default function Programs() {
  // 여기에서 props로 받은 데이터를 사용하여 페이지를 렌더링합니다.
  return (
    <MainContainer text="프로그램">
      <Blank height="20px" />
      <div className="w-full">
        <HorizontalSlide>
          <Tag text="tag" />
          <Tag text="taggggg" />
          <Tag text="tagggggggg" />
          <Tag text="tag" />
          <Tag text="taggggg" />
          <Tag text="tagggggggg" />
        </HorizontalSlide>
      </div>
      <Blank height="20px" />

      <div className={`grid gap-4 grid-cols-2 w-[344px]`}>
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
        <Card height="82px" imgSrc="/icons/cat.png" />
      </div>
    </MainContainer>
  );
}
