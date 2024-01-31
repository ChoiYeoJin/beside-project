import Image from "next/image";
import Link from "next/link";
import HeaderContainer from "./HeaderContainer";

export default function HeaderLeftText({ text }: { text: string }) {
  return (
    <HeaderContainer>
      <div>
        <div className="py-[18px] ml-4 font-bold text-xl">{text}</div>
      </div>

      <div className="absolute right-[20px] top-[15px]">
        <Image src={"/icons/bell.svg"} alt="logo" width={30} height={30} />
      </div>
    </HeaderContainer>
  );
}
