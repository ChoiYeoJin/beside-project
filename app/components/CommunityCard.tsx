import Image from "next/image";
import Blank from "./Blank";

type CommunityCardProps = {
  userName: string;
  imgSrc: string;
  createdAt: string;
  mainText: string;
  isMain: boolean;
};

export default function CommunityCard({
  userName,
  imgSrc,
  createdAt,
  mainText,
  isMain,
}: CommunityCardProps) {
  return (
    <>
      {isMain && (
        <div>
          <div className="bg-white border-b border-gray100 px-4">
            <div className="flex items-center gap-[10px] pt-5">
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <Image src={imgSrc} alt={"profile"} width={30} height={30} />
              </div>
              <div className="w-[77px] h-[38px]">
                <p className="font-medium text-base">{userName}</p>
                <p className="text-xs text-gray300 ">{createdAt}</p>
              </div>
            </div>
            <Blank height="20px" />
            <div className="font-[#222222]">{mainText}</div>
            <Blank height="20px" />
            <div className="flex items-center">
              <div className="mr-[5px]">
                <Image
                  src={"/icons/HeartEmpty.svg"}
                  alt="logo"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-[14px] text-gray300 mr-[10px]">
                좋아요 00
              </div>
              <div className="mr-[5px]">
                <Image
                  src={"/icons/ChatCircle.svg"}
                  alt="logo"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-[14px] text-gray300 mr-[5px]">댓글 00</div>
            </div>
            <Blank height="20px" />
          </div>
        </div>
      )}
      {!isMain && (
        <div>
          <div className="bg-white  px-4">
            <div className="flex items-center gap-[10px] pt-5">
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <Image src={imgSrc} alt={"profile"} width={30} height={30} />
              </div>
              <div className="w-[77px] h-[38px]">
                <p className="font-medium text-base">{userName}</p>
                <p className="text-xs text-gray300 ">{createdAt}</p>
              </div>
            </div>
            <Blank height="20px" />
            <div className="font-[#222222]">{mainText}</div>
            <Blank height="20px" />
            <div className="flex items-center">
              <div className="mr-[5px]">
                <Image
                  src={"/icons/HeartEmpty.svg"}
                  alt="logo"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-[14px] text-gray300 mr-[10px]">
                좋아요 00
              </div>
              <div className="mr-[5px]">
                <Image
                  src={"/icons/ChatCircle.svg"}
                  alt="logo"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-[14px] text-gray300 mr-[5px]">댓글 00</div>
            </div>
            <Blank height="20px" />
          </div>
        </div>
      )}
    </>
  );
}
