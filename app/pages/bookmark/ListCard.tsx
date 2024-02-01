import Image from "next/image";

type ListCardProps = {
  text: string;
  imgSrc: string;
};

export default function ListCard({ text, imgSrc }: ListCardProps) {
  return (
    <div className="shadow-md my-2 rounded-md">
      <div className="flex justify-between items-center p-4">
        <div>북마크아이콘</div>
        <div className="flex items-center">
          <div className="mr-2">{text}</div>
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <Image src={imgSrc} alt={text} width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
