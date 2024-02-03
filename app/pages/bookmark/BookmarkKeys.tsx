"use client";
import MainContainer from "@/app/components/MainContainer";
import Keyboard from "@/app/components/Keyboard";
import SearchInput from "@/app/components/ClientSearchInput";
import Blank from "@/app/components/Blank";
import KeyList from "@/app/components/KeyList";
import RadioContainer from "@/app/components/RadioContainer";
import Image from "next/image";
import BookMark from "@/app/components/icon/BookMark";

import useSWR from "swr";
import { useEffect, useState } from "react";
import axios from "axios";
import { getShortcutBookmarks } from "@/utils/storage";
import { useNoneUserStore } from "@/store/NoneUserStore";

async function fetchData() {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_SERVER_URI + "/shortcut-keys/favorites/",
      {
        id_list: getShortcutBookmarks(),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return []; // 에러가 발생했을 때 빈 배열을 반환
  }
}

export default function BookmarkKeys() {
  const [data, setData] = useState<Shortcut[]>();
  const programs = useNoneUserStore((state) => state.programs);

  const [selectedProgram, setSelectedProgram] = useState<string>("전체");
  const [filteredData, setFilteredData] = useState<Shortcut[]>([]);

  const handleProgramSelect = (program: string) => {
    setSelectedProgram(program);
    console.log(program);
  };

  useEffect(() => {
    const fetchAndSetData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    fetchAndSetData();
  }, []);

  useEffect(() => {
    if (!data) return; // data가 없다면 아무것도 하지 않음

    if (selectedProgram === "전체") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.platform === selectedProgram);
      setFilteredData(filtered);
    }
  }, [selectedProgram, data]);

  return (
    <>
      <div className="flex justify-center">
        {filteredData && filteredData[0]?.keys_list && (
          <Keyboard keys={filteredData[0].keys_list} />
        )}
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
            items={["전체", ...programs.map((program) => program.platform)]}
            setItem={handleProgramSelect}
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
          {filteredData?.map((item, index) => {
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
        </div>
      </div>
    </>
  );
}
