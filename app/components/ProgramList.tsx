"use client";
import Link from "next/link";
import ProgramCard from "./ProgramCard";
import { isProgramBookmarked } from "@/utils/storage";

type ProgramListProps = {
  items: Program[];
  isAll: boolean;
};

// id를 checkbox까지 넘겨서 거기서 api 보내도록 해야할듯
export default function ProgramList({ items, isAll }: ProgramListProps) {
  return (
    <div className="flex flex-col gap-[10px]">
      {!isAll &&
        items.map((item, index) => {
          if (isProgramBookmarked(item.platform)) {
            return (
              <ProgramCard
                key={item.platform}
                text={item.platform}
                imgSrc={item.image_url}
                id={item.platform}
              />
            );
          }
        })}
      {isAll &&
        items.map((item, index) => {
          return (
            <ProgramCard
              key={item.platform}
              text={item.platform}
              imgSrc={item.image_url}
              id={item.platform}
            />
          );
        })}
    </div>
  );
}
