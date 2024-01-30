import Image from "next/image";

type CommunityCardProps = {
  userName: string;
  imgSrc: string;
  createdAt: string;
  mainText: string;
};

export default function CommunityCard({
  userName,
  imgSrc,
  createdAt,
  mainText,
}: CommunityCardProps) {
  return (
    <div>
      <div className="bg-white">
        <div className="flex items-center m-2">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <Image src={imgSrc} alt={"profile"} width={30} height={30} />
          </div>
          <div className="m-2">
            <p>{userName}</p>
            <p>{createdAt}</p>
          </div>
        </div>
        <div className="m-2">{mainText}</div>
        <div></div>
      </div>
    </div>
  );
}
