"use client";
import { useEffect, useState } from "react";
import Input from "./Input";
import Image from "next/image";
import ClientSearchInput from "./ClientSearchInput";
import { useNoneUserStore } from "@/store/NoneUserStore";
import { platform } from "os";
import Link from "next/link";
export default function HomeSearchInput() {
  const data = useNoneUserStore((state) => state.programs);
  const getPrograms = useNoneUserStore((state) => state.getPrograms);

  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState(data);

  useEffect(() => {
    const fetchPrograms = async () => {
      await getPrograms();
    };

    fetchPrograms();
  }, [getPrograms]);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchResults([]); // 검색어가 없을 때 전체 데이터를 표시
    } else {
      const lowercasedSearch = search.toLowerCase();
      const filteredData = data.filter(
        (item) => item.platform.toLowerCase().includes(lowercasedSearch) // 'name'은 각 항목의 검색 대상 필드
      );
      setSearchResults(filteredData);
    }
  }, [search, data]);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="relative">
      <ClientSearchInput onChange={handleSearch} />
      <div
        style={{ filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.05))" }}
        className="absolute top-full mt-2 w-full rounded-[8px] bg-white max-h-[200px]  overflow-auto z-10"
      >
        {searchResults.map((result, index) => (
          <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
            {searchResults?.map((item) => {
              return (
                <Link
                  key={item.platform}
                  href={`../pages/list/${item.platform}`}
                >
                  <div className="flex items-center px-[10px]">
                    <Image
                      src={item.image_url}
                      width={20}
                      height={20}
                      alt="icon"
                    />
                    <div key={item.platform} className="my-[10px] mx-[10px]">
                      {item.platform}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
