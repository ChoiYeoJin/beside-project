import Link from "next/link";
import ProgramCard from "./ProgramCard";

type ProgramListProps = {
  items: string[];
};

// id를 checkbox까지 넘겨서 거기서 api 보내도록 해야할듯
export default function ProgramList({ items }: ProgramListProps) {
  return (
    <div className="flex flex-col gap-[10px]">
      {items.map((item, index) => (
        <ProgramCard
          key={index}
          text={item}
          imgSrc={"/icons/cat.png"}
          checked={true}
        />
      ))}
    </div>
  );
}
