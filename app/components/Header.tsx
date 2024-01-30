import Image from "next/image";
import BackButton from "./Button/BackButton";

type HeaderProps = {
  text: string;
  imgSrc?: string;
  isArrow?: boolean;
};

export default function Header({ text, imgSrc, isArrow }: HeaderProps) {
  return (
    <div className="flex items-center justify-center h-[60px] bg-primary">
      {isArrow && <BackButton />}
      {!isArrow && (
        <div className="left-[16px] absolute">
          <Image
            src={"/icons/kiki-logo.png"}
            alt="logo"
            width={40}
            height={40}
          />
        </div>
      )}
      <div>{text}</div>
      <div className="right-[16px] absolute">
        <Image src={"/icons/bell.png"} alt="logo" width={40} height={40} />
      </div>
    </div>
  );
}
