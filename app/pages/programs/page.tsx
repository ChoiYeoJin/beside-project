// pages/index.tsx
import React from "react";
import Blank from "../../components/Blank";
import Title from "../../components/Title";
import RadioContainer from "../../components/RadioContainer";
import ProgramList from "../../components/ProgramList";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import HeaderLeftText from "../../components/header/HeaderLeftText";
import useSWR from "swr";
import fetchData from "@/utils/fetch";

export default async function Programs() {
  const data = await fetchData<Program[]>("/shortcut-keys/programs");

  return (
    <>
      <HeaderLeftText text="프로그램" />
      <Main>
        <Blank height="30px" />
        <Title text="분야" />
        <Blank height="20px" />
        <div className="w-full">
          <RadioContainer items={["전체", "문서", "Adobe", "협업", "기타"]} />
        </div>
        <Blank height="20px" />
        <ProgramList items={data} isAll={true} />
      </Main>
    </>
  );
}
