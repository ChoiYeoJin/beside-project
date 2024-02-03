import Image from "next/image";
import BackButton from "../Button/BackButton";
import AlarmIcon from "../icon/AlarmIcon";

type HeaderProps = {
  text: string;
  imgSrc?: string;
  isArrow?: boolean;
};

export default function Header({ text, imgSrc, isArrow }: HeaderProps) {
  return (
    <div className="flex items-center justify-center h-[60px] bg-gray50">
      {isArrow && <BackButton />}
      {!isArrow && (
        <div className="left-[16px] absolute my-[21px]">
          <Image src={"/icons/logo.svg"} alt="logo" width={50} height={18} />
        </div>
      )}
      <div>{text}</div>
      <AlarmIcon alarmIconType="right" />
    </div>
  );
}
