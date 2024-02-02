"use client";
import Keyboard from "@/app/components/Keyboard";
import SearchInput from "@/app/components/ClientSearchInput";
import Blank from "@/app/components/Blank";
import KeyList from "@/app/components/KeyList";
import RadioContainer from "@/app/components/RadioContainer";
import Image from "next/image";
import BookMark from "@/app/components/icon/BookMark";
import Main from "@/app/components/Main";
import HeaderContainer from "@/app/components/header/HeaderContainer";
import BackButton from "@/app/components/Button/BackButton";
import Footer from "@/app/components/Footer";
import fetchData from "@/utils/fetch";
import Fuse from "fuse.js";
import { SetStateAction, useEffect, useLayoutEffect, useState } from "react";
import { useNoneUserStore } from "@/store/NoneUserStore";
import { useRouter } from "next/router";

const options = {
  includeScore: true,
  keys: ["keys_list", "description"],
};

export default function List({ params }: { params: { id: string } }) {
  const data = useNoneUserStore((state) => state.shortcuts);
  const getShortcuts = useNoneUserStore((state) => state.getShortcuts);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const fuse = new Fuse(data, options);
  const [isLoading, setIsLoading] = useState(true);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // window 객체가 정의되었는지 확인합니다 (클라이언트 측에서 실행 중인지 확인)
      const queryParams = new URLSearchParams(window.location.search);
      const searchIdValue = queryParams.get("searchId"); // 'searchId' 쿼리 파라미터 값을 가져옵니다.
      // if (searchIdValue) {
      //   setSearchId(searchIdValue);
      // }
      // const fetchShortcuts = async () => {
      //   setIsLoading(true);
      //   await getShortcuts(params.id);
      //   setIsLoading(false);
      // };
      // //setSearchResults(data?.find((item) => item.id === searchIdValue));
      // const foundShortcut = data?.find((item) => item.id === searchIdValue);
      // setSearchResults(foundShortcut ? [foundShortcut] : []);
      // fetchShortcuts();
      setSearchTerm(searchIdValue || "");
    }
  }, []);

  useEffect(() => {
    const fetchShortcuts = async () => {
      setIsLoading(true);
      await getShortcuts(params.id);
      setIsLoading(false);
    };
    setSearchResults([]);
    fetchShortcuts();
  }, [params.id, getShortcuts]);

  useEffect(() => {
    setSearchResults(data);
  }, [data]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = fuse.search(searchTerm).map((result) => result.item);
      setSearchResults(results);
    } else {
      setSearchResults(data);
    }
  }, [searchTerm, data]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  if (isLoading) {
    return <div></div>; // 로딩 중 표시
  }

  return (
    <div key={params.id}>
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
          <Keyboard
            keys={
              searchResults && searchResults.length > 0
                ? searchResults[0].keys_list
                : []
            }
          />
        </div>
        <Blank height="10px" />
        <div className="">
          <SearchInput onChange={handleSearchChange} />
          <Blank height="40px" />
          <RadioContainer items={["추천", "전체", "필수"]} />
          <Blank height="30px" />
          <div>
            {!isLoading &&
              searchResults?.map((item, index) => {
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
                        <p>{item.description}</p>
                      </div>
                      <div className="flex">
                        <KeyList
                          keys={item.keys_list}
                          isActive={index === 0 ? true : false}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            {isLoading && <div>Loading...</div>}
          </div>
        </div>
      </Main>
      <Footer selected="programs" />
    </div>
  );
}
