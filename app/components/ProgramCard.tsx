import Image from "next/image";
import BookMark from "./icon/BookMark";
import Link from "next/link";
import { isProgramBookmarked } from "@/utils/storage";

type ProgramCardPropse = {
  text: string;
  imgSrc: string;
  id: string;
  platform: string;
};

export default function ProgramCard({
  text,
  imgSrc,
  id,
  platform,
}: ProgramCardPropse) {
  return (
    <div className="flex justify-between items-center bg-white rounded-[4px] h-[60px] py-[15px] pl-[15px] pr-[10px]">
      <div className="flex items-center">
        <div className="mr-[15px]">
          <BookMark
            id={id}
            bookmarkType="프로그램"
            isChecked={false}
            platform={platform}
          />
        </div>
      </div>
      <div className="w-full">
        <Link href={`/pages/list/${platform}`}>
          <div className="flex flex-grow justify-between w-full items-center">
            <div className="text-[16px] font-medium leading-4 w-max">
              {text}
            </div>
            <div>
              <Image src={imgSrc} alt="logo" width={24} height={24} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
