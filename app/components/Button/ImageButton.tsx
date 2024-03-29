import Image from "next/image";

type ImageButtonProps = {
  imageSrc: string;
  onClick: () => void;
  text: string;
};

export default function ImageButton({
  imageSrc,
  onClick,
  text,
}: ImageButtonProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center border border-[#EEEEEE] w-[366px] py-[20px] px-[25px] rounded-[4px]"
    >
      {/* <button
        style={{ backgroundColor: backgroundColor }}
        className="rounded-full"
        onClick={onClick}
      >
        <img src={imageSrc} alt={text} className="w-6 h-6 mr-2" />
        {text}
      </button> */}
      <Image src={imageSrc} alt="social" width={30} height={30} />
      <p className="text-[#2B2B2B] font-semibold text-base ml-5">{text}</p>
    </div>
  );
}
