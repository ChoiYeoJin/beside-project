import Image from "next/image";

export default function RankList({ items }: { items: string[] }) {
  return (
    <div className=" p-[10px]">
      {items.map((item, index) => (
        <div key={item} className="flex justify-between p-[10px]">
          <div className="flex items-center">
            <p className="text-primary font-bold  mr-[10px] text-[16px]]">
              {index + 1}
            </p>
            <div className="mr-[10px]">
              <Image src={"/icons/cat.png"} alt="logo" width={16} height={16} />
            </div>
            <p className="text-[16px] font-medium">{item}</p>
          </div>
          <div>
            <Image
              src={"/icons/CaretRight.png"}
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
