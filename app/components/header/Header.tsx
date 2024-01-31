import Image from "next/image";
import BackButton from "../Button/BackButton";

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
        <div className="left-[16px] absolute my-[20px]">
          <Image src={"/icons/logo.svg"} alt="logo" width={50} height={17} />
        </div>
      )}
      <div>{text}</div>
      <div className=" right-[21px] top-[16px] absolute">
        <Image src={"/icons/bell.svg"} alt="logo" width={30} height={30} />
      </div>
    </div>
  );
}
