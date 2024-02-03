import Image from "next/image";
import Link from "next/link";

type AlarmCardPropse = {
  category: string;
  contents: string;
  date: string;
  link: string;
};

export default function AlarmCard({
  category,
  contents,
  date,
  link,
}: AlarmCardPropse) {
  return (
    <>
      <div className="relative py-5 pl-4 pr-[60px] flex flex-col gap-[10px] bg-white">
        <div className="font-semibold text-xs text-primary">{category}</div>
        <div className="text-base text-[#222222]">{contents}</div>
        <div className="text-gray300 text-xs ">{date}</div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Image
            src={"/icons/CaretRight.svg"}
            alt="logo"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="border border-gray100 w-full"></div>
    </>
  );
}
