import Link from "next/link";
import MainContainer from "../components/MainContainer";
import ListCard from "./ListCard";
import RadioContainer from "../components/RadioContainer";

export default function Bookmark() {
  return (
    <MainContainer text="즐겨찾기">
      <div className="w-full flex my-2">
        <RadioContainer items={["프로그램", "단축키"]} />
      </div>
      <div className="flex flex-col">
        <Link href={"/list/figma"}>
          <ListCard text="figma" imgSrc="/cat.png" />
        </Link>
        <ListCard text="figma" imgSrc="/cat.png" />
        <ListCard text="figma" imgSrc="/cat.png" />
        <ListCard text="figma" imgSrc="/cat.png" />
      </div>
    </MainContainer>
  );
}
