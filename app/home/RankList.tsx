import Image from "next/image";

export default function RankList({ items }: { items: string[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item}
          className="flex justify-between py-[10px]  px-[12px] w-full"
        >
          <div className="flex items-center">
            <p className="text-primary font-bold  mr-[10px] text-[16px] w-[15px]">
              {index + 1}
            </p>
            <div className="mr-[10px]">
              <Image src={"/icons/cat.png"} alt="logo" width={16} height={16} />
            </div>
            <p className="text-[16px] font-medium">{item}</p>
          </div>
          <div>
            <Image
              src={"/icons/CaretRight.svg"}
              alt="logo"
              width={16}
              height={16}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
