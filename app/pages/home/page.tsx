// pages/index.tsx

import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import MainContainer from "../../components/MainContainer";
import Blank from "../../components/Blank";
import Title from "../../components/Title";
import Card from "../../components/Card";
import Link from "next/link";
import ClientSearchInput from "../../components/ClientSearchInput";
import Rankings from "./Rankings";
import HomeSearchInput from "@/app/components/HomeSearchInput";
import BookmarkList from "./BookmarkList";

export default function Home() {
  // 여기에서 props로 받은 데이터를 사용하여 페이지를 렌더링합니다.

  return (
    <MainContainer>
      <div>
        <Blank height="20px" />
        <HomeSearchInput />
        <Blank height="40px" />
        <Title text="내 즐겨찾기" />
        <Blank height="20px" />
        <BookmarkList />
        <Blank height="40px" />
        <Title text="실시간 인기 순위" />
        <Blank height="20px" />
        <Rankings />
      </div>
    </MainContainer>
  );
}
