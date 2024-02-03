import Image from "next/image";
import Link from "next/link";
import HeaderContainer from "./HeaderContainer";
import AlarmIcon from "../icon/AlarmIcon";

export default function HeaderLeftText({ text }: { text: string }) {
  return (
    <HeaderContainer>
      <div>
        <div className="py-[18px] ml-4 font-semibold text-xl">{text}</div>
      </div>

      <AlarmIcon alarmIconType="right" />
    </HeaderContainer>
  );
}
