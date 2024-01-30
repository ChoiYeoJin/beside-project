import Image from "next/image";
type CardProps = {
  height: string;
  imgSrc: string;
};

export default function Card({ height, imgSrc }: CardProps) {
  return (
    <div
      style={{ height: height }}
      className="flex items-center justify-center shadow-md bg-white rounded-md"
    >
      <Image src={imgSrc} alt="logo" width={24} height={24} />
    </div>
  );
}
