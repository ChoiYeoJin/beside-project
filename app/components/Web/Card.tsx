import Image from "next/image";
type CardProps = {
  height: string;
  imgSrc: string;
  text?: string;
};

export default function Card({ height, imgSrc, text }: CardProps) {
  return (
    <div className="w-[156px] h-[149px] shadow-md bg-white rounded-[10px] border border-gray100">
      <div className="flex justify-center">
        <div className="flex justify-center w-[100px] h-[100px]">
          <Image src={imgSrc} alt="logo" width={70} height={70} />
        </div>
      </div>
      <div className="flex items-center justify-center h-[49px] w-full">
        {text && (
          <p className="text-center text-[#2B2B2B] font-semibold text-base">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
