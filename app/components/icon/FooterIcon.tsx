import Image from "next/image";
import Link from "next/link";

type FooterIconProps = {
  tabName: string;
  imgSrc: string;
  name: string;
  onClick: (tabName: string) => void;
  checked?: boolean;
};

export default function FooterIcon({
  tabName,
  imgSrc,
  name,
  onClick,
  checked,
}: FooterIconProps) {
  return (
    <div
      className="flex flex-col items-center"
      onClick={() => onClick(tabName)}
    >
      <Link href={`/pages/${tabName}`}>
        <Image
          src={imgSrc}
          alt={tabName}
          width={28}
          height={28}
          layout="fixed"
        />
      </Link>
      <div
        style={
          checked
            ? { color: "#33C481", fontWeight: "bold" }
            : { color: "#222222", fontWeight: "normal" }
        }
        className="text-[10px]"
      >
        {name}
      </div>
    </div>
  );
}
