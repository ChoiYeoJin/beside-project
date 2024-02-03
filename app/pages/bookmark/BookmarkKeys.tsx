import MainContainer from "@/app/components/MainContainer";
import Keyboard from "@/app/components/Keyboard";
import SearchInput from "@/app/components/ClientSearchInput";
import Blank from "@/app/components/Blank";
import KeyList from "@/app/components/KeyList";
import RadioContainer from "@/app/components/RadioContainer";
import Image from "next/image";
import BookMark from "@/app/components/icon/BookMark";

export default function BookmarkKeys() {
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
    <>
      <div className="flex justify-center">
        <Keyboard keys={data ? data[0].keys : []} />
      </div>
      <Blank height="10px" />
      <div className="">
        {/* <SearchInput /> */}
        <Blank height="40px" />
        <div
          className="grid grid-cols-2 gap-y-[10px] gap-x-[20px]"
          style={{ gridTemplateColumns: "70px auto" }}
        >
          <div className="flex items-center">
            <div className="text-[14px] text-gray300 font-semibold w-auto h-[17px] ">
              프로그램
            </div>
          </div>
          <RadioContainer
            items={["전체", "파일&프로퍼티", "선택", "편집", "프로그램"]}
          />
          <div className="flex items-center">
            <div className="text-[14px] text-gray300 font-semibold w-[50px]  h-[17px] ">
              분류
            </div>
          </div>
          <RadioContainer items={["추천", "전체", "필수"]} />
        </div>
        <Blank height="10px" />

        <Blank height="30px" />
        <div>
          {data.map((item, index) => {
            return (
              <div key={item.id} className="h-[40px] mb-[20px]">
                <div className="flex justify-between items-center ">
                  <div key={item.id} className="flex ">
                    <div className="mr-[14px] ml-[4px]">
                      <BookMark
                        size={24}
                        isChecked={index === 0 ? true : false}
                        bookmarkType="단축키"
                        id={item.id}
                      />
                    </div>
                    <p>{item.desc}</p>
                  </div>
                  <div className="flex">
                    <KeyList
                      keys={item.keys}
                      isActive={index === 0 ? true : false}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
