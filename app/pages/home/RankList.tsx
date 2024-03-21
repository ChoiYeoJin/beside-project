import { fetchData } from "@/utils/fetch";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

type RankListProps = {
  itemType: string;
};

export default function RankList({ itemType }: RankListProps) {
  const { data: programs, error: programError } = useSWR<Program[], Error>(
    `/shortcut-keys/programs`,
    fetchData
  );

  const { data: shortcuts, error: shortcutError } = useSWR<Shortcut[], Error>(
    `/shortcut-keys/allrank`,
    fetchData
  );

  if (programError || shortcutError) return <div>Failed to load</div>;
  if (!programs || !shortcuts) return <div></div>;

  return (
    <div>
      {itemType === "프로그램" &&
        programs?.map((item, index) => (
          <Link href={`/pages/list/${item.platform}`} key={item.platform}>
            <div className="flex justify-between py-[10px]  px-[12px] w-full">
              <div className="flex items-center">
                <p className="text-[#222222] font-bold  mr-[10px] text-[14px] w-[15px]">
                  {index + 1}
                </p>
                <div className="mr-[10px]">
                  <Image
                    src={item.image_url}
                    alt="logo"
                    width={16}
                    height={16}
                  />
                </div>
                <p className="text-[16px] font-medium">{item.platform}</p>
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
          </Link>
        ))}
      {itemType === "단축키" &&
        shortcuts?.map((item, index) => (
          <Link
            href={`/pages/list/${item.platform}?searchId=${item.keys_list.join(
              "+"
            )}`}
            key={item.id}
          >
            <div className="flex justify-between py-[10px]  px-[12px] w-full">
              <div className="flex items-center">
                <p className="text-primary font-bold  mr-[10px] text-[16px] w-[15px]">
                  {index + 1}
                </p>
                <div className="mr-[10px]">
                  <Image
                    src={process.env.NEXT_PUBLIC_SERVER_URI + item.image}
                    alt="logo"
                    width={16}
                    height={16}
                  />
                </div>
                <p className="text-[16px] font-medium">
                  {item.platform} : {item.keys_list?.join(" + ")}
                </p>
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
          </Link>
        ))}
    </div>
  );
}
