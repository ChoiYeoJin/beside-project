import Image from "next/image";
import Link from "next/link";

type FooterIconProps = {
  tabName: string;
  imgSrc: string;
  name: string;
  onClick: (tabName: string) => void;
};

export default function FooterIcon({
  tabName,
  imgSrc,
  name,
  onClick,
}: FooterIconProps) {
  return (
    <div
      className="flex flex-col items-center"
      onClick={() => onClick(tabName)}
    >
      <Link href={`/pages/${tabName}`}>
        <Image src={imgSrc} alt={tabName} width={28} height={28} />
      </Link>
      <div className="text-[10px]">{name}</div>
    </div>
  );
}
