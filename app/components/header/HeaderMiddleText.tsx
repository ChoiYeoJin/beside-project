import Image from "next/image";
import Link from "next/link";
import HeaderContainer from "./HeaderContainer";
import AlarmIcon from "../icon/AlarmIcon";
import BackButton from "../Button/BackButton";

export default function HeaderMiddleText({ text }: { text: string }) {
  return (
    <HeaderContainer>
      <BackButton />
      <div className="flex items-center justify-center mt-[18px]">
        <div className="font-semibold text-lg">{text}</div>
      </div>
    </HeaderContainer>
  );
}
