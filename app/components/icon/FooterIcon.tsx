import Image from "next/image";
import Link from "next/link";

type FooterIconProps = {
  tabName: string;
  imgSrc: string;
  name: string;
  onClick: (tabName: string) => void;
  key: string;
};

export default function FooterIcon({
  key,
  tabName,
  imgSrc,
  name,
  onClick,
}: FooterIconProps) {
  return (
    <div
      key={key}
      className="flex flex-col items-center"
      onClick={() => onClick(tabName)}
    >
      <Link href={`/${tabName}`}>
        <Image src={imgSrc} alt={tabName} width={28} height={28} />
      </Link>
      <div className="text-[10px]">{name}</div>
    </div>
  );
}
