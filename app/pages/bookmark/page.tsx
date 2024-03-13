"use client";
import Link from "next/link";
import MainContainer from "../../components/MainContainer";
import ListCard from "./ListCard";
import RadioContainer from "../../components/RadioContainer";
import ToggleButton from "../../components/Button/ToggleButton";
import ProgramList from "../../components/ProgramList";
import Blank from "../../components/Blank";
import { useEffect, useState } from "react";
import BookmarkKeys from "./BookmarkKeys";
import Main from "../../components/Main";
import HeaderLeftText from "../../components/header/HeaderLeftText";
import Footer from "../../components/Footer";
import { useNoneUserStore } from "@/store/NoneUserStore";
import useBookmark from "@/app/hooks/useBookmark";
import { useUserStore } from "@/store/UserStore";
import { isUserLoggedIn } from "@/utils/storage";
import { useRouter } from "next/navigation";

export default function Bookmark() {
  const [selectedItem, setSelectedItem] = useState<string | null>("프로그램");
  // const programs = useUserStore((state) => state.bookmarkPrograms);
  // const getPrograms = useUserStore((state) => state.getBookmarkPrograms);
  const router = useRouter();
  const bookmark = useBookmark();
  useEffect(() => {
    // if (!isUserLoggedIn()) {
    //   alert("로그인이 필요한 서비스 입니다.");
    //   router.push("/pages/home");
    // }
  }, []);

  useEffect(() => {
    bookmark?.onBookmarkInit();
    console.log(bookmark?.bookmarkPrograms);
  }, [bookmark?.isLoaded]);

  return (
    <>
      <HeaderLeftText text="즐겨찾기" />
      <Main>
        <Blank height="30px" />
        <div className="flex justify-center">
          <ToggleButton
            items={["프로그램", "단축키"]}
            setItem={setSelectedItem}
          />
        </div>

        {selectedItem === "프로그램" && (
          <>
            <Blank height="30px" />
            <ProgramList
              items={
                bookmark === undefined ? [] : [...bookmark.bookmarkPrograms]
              }
              isAll={false}
            />
          </>
        )}
        {selectedItem === "단축키" && <BookmarkKeys />}
      </Main>
      {/* <Footer selected="bookmark" /> */}
    </>
  );
}
