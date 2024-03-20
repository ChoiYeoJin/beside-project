"use client";

import Blank from "@/app/components/Blank";
import Container from "@/app/components/Container";
import Keyboard from "@/app/components/Web/Keyboard";
import ProgramsMenu from "@/app/components/Web/ProgramsMenu";
import SearchInput from "@/app/components/ClientSearchInput";
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
import { getShortcutBookmarks, isUserLoggedIn } from "@/utils/storage";
import { useUserStore } from "@/store/UserStore";
import useBookmark from "@/app/hooks/useBookmark";

const options = {
  includeScore: true,
  keys: ["keys_list", "description"],
};

export default function KeyListPage({ params }: { params: { id: string } }) {
  const data = useNoneUserStore((state) => state.shortcuts);
  const getShortcuts = useNoneUserStore((state) => state.getShortcuts);
  const shortcutPopular = useNoneUserStore((state) => state.shortcutPopular);
  const getShortcutPopular = useNoneUserStore(
    (state) => state.getShortcutPopular
  );

  const bookmark = useBookmark();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const fuse = new Fuse(data, options);
  const [isLoading, setIsLoading] = useState(true);
  const [searchId, setSearchId] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("전체");

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

      if (isUserLoggedIn()) {
        bookmark?.onBookmarkInit();
      }

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

  return (
    <div>
      <div className="w-[588px]">
        <Blank height="60px" />
        <Keyboard
          keys={searchResults && searchResults.length > 0 ? activeKeyList : []}
        />
        <Blank height="50px" />
        <SearchInput
          onChange={handleSearchChange}
          placeholder="궁금한 기능을 검색해 보세요."
          color="white"
        />
        <Blank height="50px" />
        <div className="">
          <div className="flex items-center  flex-col scrollable-div">
            {!isLoading &&
              searchResults?.map((item, index) => {
                return (
                  <div className="flex ">
                    <div
                      onClick={() => {
                        setActiveKeyId(item.id);
                        setActiveKeyList(item.keys_list);
                      }}
                      key={item.id}
                      className="flex items-center rounded-lg h-[60px] w-[588px] py-[10px] pl-[30px] pr-[3px] hover:bg-gray100 hover:text-primary transition duration-300 ease-in-out"
                    >
                      <div className="w-[250px]">
                        <p
                          className={`${
                            activeKeyId === item.id
                              ? "text-primary"
                              : "text-black"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                      <div className="flex w-80 justify-between">
                        <div className="flex justify-between items-center ">
                          <div className="flex mx-[4px]">
                            <KeyList
                              keys={item.keys_list}
                              isActive={activeKeyId === item.id}
                            />
                          </div>
                        </div>
                        <div
                          key={item.id}
                          className="flex w-[50px] items-center"
                        >
                          <div className="">
                            <BookMark
                              size={24}
                              isChecked={false}
                              bookmarkType="단축키"
                              id={item.id}
                              platform={params.id}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="w-[50%]"></div>
            <div className="w-[50%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
