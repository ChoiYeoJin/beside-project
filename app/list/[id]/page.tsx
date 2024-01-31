import MainContainer from "@/app/components/MainContainer";
import Keyboard from "../../components/Keyboard";
import SearchInput from "@/app/components/ClientSearchInput";
import Blank from "@/app/components/Blank";
import KeyList from "@/app/components/KeyList";
import RadioContainer from "@/app/components/RadioContainer";
import Image from "next/image";
import BookMark from "@/app/components/icon/BookMark";
import Main from "@/app/components/Main";
import HeaderContainer from "@/app/components/header/HeaderContainer";
import Link from "next/link";
import BackButton from "@/app/components/Button/BackButton";
import Footer from "@/app/components/Footer";

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
    <>
      <HeaderContainer>
        <div>
          <BackButton />
        </div>
        <div>
          <div className="py-[18px]  font-bold text-xl text-center tracking-[3%]">
            {params.id}
          </div>
        </div>

        <div className="absolute right-[20px] top-[15px]">
          <BookMark isChecked={true} size={30} isBlack={true} />
        </div>

        <div className="absolute right-[71px] top-[15px]">
          <Image src={"/icons/bell.svg"} alt="logo" width={30} height={30} />
        </div>
      </HeaderContainer>
      <Main>
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
            {data.map((item, index) => {
              return (
                <div key={item.id} className="h-[40px] mb-[20px]">
                  <div className="flex justify-between items-center ">
                    <div key={item.id} className="flex ">
                      <div className="mr-[14px] ml-[4px]">
                        <BookMark
                          size={24}
                          isChecked={index === 0 ? true : false}
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
      </Main>
      <Footer selected="programs" />
    </>
  );
}
