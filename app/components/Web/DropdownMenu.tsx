import Link from "next/link";
import Blank from "../Blank";

type DroptdownMenuProps = {
  imgSrc?: string;
  title: string;
  active: boolean;
  childTitle?: string[];
  childUrl?: string[];
  onClick: () => void;
  titleUrl?: string;
};

export default function DropdownMenu({
  imgSrc,
  title,
  active,
  childTitle,
  childUrl,
  titleUrl,
  onClick,
}: DroptdownMenuProps) {
  return (
    <div className="py-[10px] cursor-pointer" onClick={onClick}>
      <Link href={titleUrl ?? ""}>
        <div className="text-base font-semibold leading-6">{title}</div>
      </Link>
      {active && childTitle && (
        <>
          <div className="px-5 py-[10px]">
            {childTitle?.map((item, index) => (
              <Link
                key={index}
                href={childUrl?.[index] ?? ""}
                className="text-base text-gray300 hover:text-primary"
              >
                <div className="px-5 py-[10px]">{item}</div>
              </Link>
            ))}
          </div>
          <Blank height="10px" />
        </>
      )}
    </div>
  );
}
