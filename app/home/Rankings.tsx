"use client";
import { useState } from "react";
import RadioContainer from "../components/RadioContainer";
import RankList from "./RankList";
import Blank from "../components/Blank";

export default function Rankings() {
  const [rankType, setRankType] = useState<string>("프로그램");
  const programRankings = [
    "프로그램명",
    "프로그램명",
    "프로그램명",
    "프로그램명",
    "프로그램명",
  ];
  const shortcutRankings = ["단축키", "단축키", "단축키", "단축키", "단축키"];
  return (
    <div className="w-full">
      <RadioContainer items={["프로그램", "단축키"]} setItem={setRankType} />
      <Blank height="20px" />
      {rankType === "프로그램" && <RankList items={programRankings} />}
      {rankType === "단축키" && <RankList items={shortcutRankings} />}
    </div>
  );
}
