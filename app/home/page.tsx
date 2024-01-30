// pages/index.tsx
import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";
import SearchInput from "../components/ClientSearchInput";
import MainContainer from "../components/MainContainer";
import Blank from "../components/Blank";
import Title from "../components/Title";
import Card from "../components/Card";
import Link from "next/link";
import RadioContainer from "../components/RadioContainer";
import Input from "../components/Input";
import SearchComponent from "../components/SearchComponent";
import ClientSearchInput from "../components/ClientSearchInput";

export default function Home() {
  // 여기에서 props로 받은 데이터를 사용하여 페이지를 렌더링합니다.

  return (
    <MainContainer>
      <div>
        <Blank height="30px" />
        <ClientSearchInput />
        <Blank height="30px" />
        <Title text="내 즐겨찾기" />
        <Blank height="30px" />
        <div className={`grid gap-3 grid-cols-3`}>
          <Link href={"/list/figma"}>
            <Card height="60px" imgSrc="/icons/cat.png" />
          </Link>
          <Card height="60px" imgSrc="/icons/cat.png" />
          <Card height="60px" imgSrc="/icons/cat.png" />
          <Card height="60px" imgSrc="/icons/cat.png" />
          <Card height="60px" imgSrc="/icons/cat.png" />
        </div>
        <Blank height="40px" />
        <Title text="실시간 인기 순위" />
        <Blank height="20px" />
        <RadioContainer items={["프로그램", "단축키"]} />
      </div>
    </MainContainer>
  );
}
