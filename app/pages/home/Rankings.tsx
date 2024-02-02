"use client";
import { useEffect, useState } from "react";
import RadioContainer from "../../components/RadioContainer";
import RankList from "./RankList";
import Blank from "../../components/Blank";
import { useNoneUserStore } from "@/store/NoneUserStore";
import axios from "axios";
import useSWR from "swr";
import fetchData from "@/utils/fetch";

export default function Rankings() {
  const [rankType, setRankType] = useState<string>("프로그램");

  // const { programs, shortcuts, getProgramRankings, getShortcutRankings } =
  //   useNoneUserStore((state) => ({
  //     programs: state.programRankings,
  //     shortcuts: state.shortcutRankings,
  //     getProgramRankings: state.getProgramRankings,
  //     getShortcutRankings: state.getShortcutRankings,
  //   }));

  // useEffect(() => {
  //   getProgramRankings();
  //   getShortcutRankings();
  // }, []);

  const shortcutRankings = ["단축키", "단축키", "단축키", "단축키", "단축키"];
  return (
    <div className="w-full">
      <RadioContainer items={["프로그램", "단축키"]} setItem={setRankType} />
      <Blank height="20px" />
      {rankType === "프로그램" && <RankList itemType="프로그램" />}
      {rankType === "단축키" && <RankList itemType="단축키" />}
    </div>
  );
}
