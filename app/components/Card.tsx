import Image from "next/image";
type CardProps = {
  height: string;
  imgSrc: string;
  text?: string;
};

export default function Card({ height, imgSrc, text }: CardProps) {
  return (
    <div
      style={{ height: height }}
      className="flex items-center justify-center shadow-md bg-white rounded-md"
    >
      <Image src={imgSrc} alt="logo" width={30} height={30} />
    </div>
  );
}
