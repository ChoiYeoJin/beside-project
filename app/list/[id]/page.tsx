import MainContainer from "@/app/components/MainContainer";
import Keyboard from "../../components/Keyboard";
import SearchInput from "@/app/components/ClientSearchInput";
import Blank from "@/app/components/Blank";
import KeyList from "@/app/components/KeyList";
import RadioContainer from "@/app/components/RadioContainer";
import Image from "next/image";

export default function List({ params }: { params: { id: string } }) {
  const data = [
    {
      id: "1",
      desc: "메뉴창 UI 보이기",
      keys: ["Z", "ctrl"],
    },
    {
      id: "2",
      desc: "메뉴창 UI 보이기",
      keys: ["B", "ctrl"],
    },
    {
      id: "3",
      desc: "메뉴창 UI 보이기",
      keys: ["C", "ctrl"],
    },
  ];
  return (
    <MainContainer text={params.id} isArrow={true}>
      <div className="flex justify-center">
        <Keyboard keys={data ? data[0].keys : []} />
      </div>
      <Blank height="10px" />
      <div className="">
        <SearchInput />
        <Blank height="40px" />
        <RadioContainer items={["추천", "전체", "필수"]} />
        <Blank height="30px" />
        <div>
          {data.map((item) => {
            return (
              <div key={item.id} className="h-[40px] mb-[20px]">
                <div className="flex justify-between items-center ">
                  <div key={item.id} className="flex ">
                    <div className="mr-[18px]">
                      <Image
                        src={"/icons/BookMarkSimple.png"}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p>{item.desc}</p>
                  </div>
                  <div className="flex">
                    <KeyList keys={item.keys} isActive={true} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainContainer>
  );
}
