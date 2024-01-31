"use client";
import { useState } from "react";
import RadioContainer from "../components/RadioContainer";
import RankList from "./RankList";

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
    <div>
      <RadioContainer items={["프로그램", "단축키"]} setItem={setRankType} />
      {rankType === "프로그램" && <RankList items={programRankings} />}
      {rankType === "단축키" && <RankList items={shortcutRankings} />}
    </div>
  );
}
