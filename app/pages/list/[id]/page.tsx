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
import AlarmIcon from "@/app/components/icon/AlarmIcon";

const options = {
  includeScore: true,
  keys: ["keys_list", "description"],
};

export default function List({ params }: { params: { id: string } }) {
  const data = useNoneUserStore((state) => state.shortcuts);
  const getShortcuts = useNoneUserStore((state) => state.getShortcuts);
  const shortcutPopular = useNoneUserStore((state) => state.shortcutPopular);
  const getShortcutPopular = useNoneUserStore(
    (state) => state.getShortcutPopular
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const fuse = new Fuse(data, options);
  const [isLoading, setIsLoading] = useState(true);
  const [searchId, setSearchId] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("추천");

  const [activeKeyId, setActiveKeyId] = useState<string | null>(null);
  const [activeKeyList, setActiveKeyList] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const searchIdValue = queryParams.get("searchId");

      setSearchTerm(searchIdValue || "");
    }
  }, []);

  useEffect(() => {
    const fetchShortcuts = async () => {
      setIsLoading(true);
      await getShortcuts(params.id);
      await getShortcutPopular(params.id);
      setIsLoading(false);
    };
    setSearchResults([]);
    fetchShortcuts();
  }, [params.id, getShortcuts, getShortcutPopular]);

  useEffect(() => {
    if (selectedFilter === "추천") {
      setSearchResults(shortcutPopular);
      setActiveKeyId(shortcutPopular[0]?.id);
    } else if (selectedFilter === "전체") {
      setSearchResults(data);
      setActiveKeyId(data[0]?.id);
    }
  }, [data, shortcutPopular, selectedFilter]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = fuse.search(searchTerm).map((result) => result.item);
      setSearchResults(results);
      setActiveKeyId(results[0]?.id);
    } else {
      if (selectedFilter === "추천") {
        setSearchResults(shortcutPopular);
        setActiveKeyId(shortcutPopular[0]?.id);
      } else if (selectedFilter === "전체") {
        setSearchResults(data);
        setActiveKeyId(data[0]?.id);
      }
    }
  }, [searchTerm, data]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
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
          <BookMark
            isChecked={true}
            size={30}
            isBlack={true}
            bookmarkType="프로그램"
            id={params.id}
          />
        </div>

        <AlarmIcon alarmIconType="left" />
      </HeaderContainer>

      <Main>
        <div className="flex justify-center">
          <Keyboard
            keys={
              searchResults && searchResults.length > 0 ? activeKeyList : []
            }
          />
        </div>
        <Blank height="10px" />
        <div className="">
          <SearchInput
            onChange={handleSearchChange}
            placeholder="궁금한 기능을 검색해 보세요."
          />
          <Blank height="40px" />
          <RadioContainer
            items={["추천", "전체"]}
            setItem={handleFilterChange}
          />
          <Blank height="30px" />
          <div>
            {!isLoading &&
              searchResults?.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setActiveKeyId(item.id);
                      setActiveKeyList(item.keys_list);
                    }}
                    key={item.id}
                    className="h-[40px] mb-[20px] "
                  >
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
                        <p>{item.description}</p>
                      </div>
                      <div className="flex">
                        <KeyList
                          keys={item.keys_list}
                          isActive={activeKeyId === item.id}
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
