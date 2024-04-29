"use client";

import Blank from "@/app/components/Blank";
import Keyboard from "@/app/components/Web/Keyboard";
import SearchInput from "@/app/components/ClientSearchInput";
import KeyList from "@/app/components/KeyList";
import Image from "next/image";
import BookMark from "@/app/components/icon/BookMark";

import Fuse from "fuse.js";
import { useEffect, useState, useRef, useMemo } from "react";
import { useNoneUserStore } from "@/store/NoneUserStore";

import { isUserLoggedIn } from "@/utils/storage";
import useBookmark from "@/app/hooks/useBookmark";
import { useMutation, useQuery } from "react-query";
import { fetchData, fetchDataAuthorized, updateShortcut } from "@/utils/fetch";

const options = {
  includeScore: true,
  keys: ["keys_list", "description"],
};

export default function KeyListPage({ params }: { params: { id: string } }) {
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState("auto");

  const { data: data, status } = useQuery<Shortcut[]>(
    ["shortcuts", params.id],
    () => fetchData<Shortcut[]>(`/shortcut-keys/?platform=${params.id}`),
    {
      staleTime: Infinity,
    }
  );

  //const getShortcuts = useNoneUserStore((state) => state.getShortcuts);
  const shortcutPopular = useNoneUserStore((state) => state.shortcutPopular);
  const getShortcutPopular = useNoneUserStore(
    (state) => state.getShortcutPopular
  );

  const bookmark = useBookmark();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const fuse = useMemo(() => {
    return data ? new Fuse(data, options) : null;
  }, [data]); // data가 변경될 때만 Fuse 인스턴스를 재생성합니다.

  const [isLoading, setIsLoading] = useState(true);
  const [searchId, setSearchId] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("전체");

  const [activeKeyId, setActiveKeyId] = useState<string | null>(null);
  const [activeKeyList, setActiveKeyList] = useState<string[]>([]);

  const [searchIdValue, setSearchIdValue] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const initialSearchIdValue = queryParams.get("searchDescription") ?? "";
      setSearchIdValue(initialSearchIdValue);
      if (initialSearchIdValue.trim()) {
        setSearchTerm(initialSearchIdValue); // 초기 검색어를 설정합니다.
      }
    }
    const calculateAndSetDivHeight = () => {
      // 스크롤 가능한 div의 상단 위치를 계산합니다.
      const divTop = scrollableDivRef.current?.getBoundingClientRect().top ?? 0;
      // 뷰포트 높이에서 div의 상단 위치를 빼서 div의 높이를 계산합니다.
      const calculatedHeight = window.innerHeight - divTop;
      setDivHeight(`${calculatedHeight}px`);
    };

    // 컴포넌트 마운트 시와 브라우저 창 크기 변경 시에 높이를 재계산합니다.
    calculateAndSetDivHeight();
    window.addEventListener("resize", calculateAndSetDivHeight);

    // cleanup function
    return () => {
      window.removeEventListener("resize", calculateAndSetDivHeight);
    };
  }, []);

  useEffect(() => {
    const fetchShortcuts = async () => {
      setIsLoading(true);
      //await getShortcuts(params.id);

      if (isUserLoggedIn()) {
        bookmark?.onBookmarkInit();
      }

      setIsLoading(false);
    };
    setSearchResults([]);
    fetchShortcuts();
  }, [params.id, getShortcutPopular]);

  // useEffect(() => {
  //   // 초기 값이 설정된 후 한 번만 검색 실행
  //   if (searchIdValue && fuse) {
  //     const results = fuse.search(searchIdValue).map((result) => result.item);
  //     setSearchResults(results);
  //     if (results.length > 0) {
  //       setActiveKeyId(results[0]?.id);
  //     }
  //   }
  // }, [searchIdValue, fuse]); // searchIdValue 초기 설정 후에만 실행

  useEffect(() => {
    // 사용자 입력에 의한 검색 실행
    if (searchTerm.trim() && fuse) {
      const results = fuse.search(searchTerm).map((result) => result.item);
      setSearchResults(results);
      if (results.length > 0) {
        setActiveKeyId(results[0].id);
      } else {
        setActiveKeyId(null); // 검색 결과가 없는 경우 처리
      }
    } else {
      // 검색어가 비어있는 경우 전체 데이터를 보여줍니다.
      setSearchResults(data);
      if (data && data.length > 0) {
        setActiveKeyId(data[0].id); // 첫 번째 키를 활성화
      } else {
        setActiveKeyId(null); // 데이터가 없는 경우 처리
      }
    }
  }, [searchTerm, fuse]); // searchTerm 변경 시에만 실행

  // 선택 필터에 따른 데이터 처리를 별도의 useEffect로 분리
  useEffect(() => {
    if (!searchTerm.trim()) {
      // 검색어가 비어있을 때만 필터 로직을 적용
      if (selectedFilter === "전체" && status === "success" && data) {
        setSearchResults(data);
        setActiveKeyId(data[0]?.id);
      }
    }
  }, [selectedFilter, data, status]);

  useEffect(() => {
    // 검색 결과나 필터링 결과가 변경될 때 첫 번째 항목을 활성화
    if (searchResults && searchResults.length > 0) {
      setActiveKeyId(searchResults[0].id);
      setActiveKeyList(searchResults[0].keys_list);
    }

    if (!searchTerm.trim()) {
      // 검색어가 비어있을 때만 필터 로직을 적용
      if (selectedFilter === "전체" && status === "success" && data) {
        setSearchResults(data);
        setActiveKeyId(data[0]?.id);
      }
    }
  }, [searchResults]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  const mutation = useMutation(updateShortcut, {
    onSuccess: (data) => {
      console.log("Data update success", data);
    },
    onError: (error) => {
      console.log("Failed to update data", error);
    },
  });
  const handleListClick = (item: Shortcut) => {
    setActiveKeyId(item.id);
    setActiveKeyList(item.keys_list);
    if (isUserLoggedIn()) {
      mutation.mutate({ platform: params.id, shortcutId: item.id });
    }
  };

  return (
    <div>
      <div className="w-[588px]">
        <Blank height="60px" />
        <div className="flex justify-center">
          <Keyboard
            keys={
              searchResults && searchResults.length > 0 ? activeKeyList : []
            }
          />
        </div>
        <Blank height="50px" />
        <SearchInput
          onChange={handleSearchChange}
          placeholder="궁금한 기능을 검색해 보세요."
          color="white"
          value={searchIdValue}
        />
        <Blank height="50px" />

        <div className="flex h-[60px] w-[588px] py-[10px] pl-[30px] pr-[3px]">
          <div className="w-[250px] text-gray300 font-semibold">문자</div>
          <div className="flex gap-2 items-center">
            <div className="cursor-pointer h-[40px] w-[40px]">
              <Image
                alt="logo"
                src="/icons/web-icons/mac.svg"
                width={18}
                height={20}
              />
            </div>
            <div className="cursor-pointer  h-[40px] w-[40px]">
              <Image
                alt="logo"
                src="/icons/web-icons/window.svg"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        <Blank height="20px" />
        <div className="">
          <div
            className="flex items-center  flex-col scrollable-div"
            ref={scrollableDivRef}
            style={{ height: divHeight }}
          >
            {!isLoading &&
              searchResults?.map((item, index) => {
                return (
                  <div className="flex " key={item.id}>
                    <div
                      onClick={() => handleListClick(item)}
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
          </div>
        </div>
      </div>
      <div id="modal-root"></div>
    </div>
  );
}
