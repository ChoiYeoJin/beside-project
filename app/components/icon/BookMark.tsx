"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  isProgramBookmarked,
  isShortcutBookmarked,
  isUserLoggedIn,
} from "@/utils/storage";
import { useUserStore } from "@/store/UserStore";

type BookmarkType = "프로그램" | "단축키";

type BookMarkProps = {
  isChecked: boolean;
  size?: number;
  isBlack?: boolean;
  onClick?: () => void;
  bookmarkType: BookmarkType;
  id: string;
  platform?: string;
};

function checkBookmarked(id: string, bookmarkType: BookmarkType): boolean {
  if (bookmarkType === "프로그램") {
    return isProgramBookmarked(id);
  }
  if (bookmarkType === "단축키") {
    return isShortcutBookmarked(id);
  }
  return false;
}

export default function BookMark({
  isChecked,
  size,
  isBlack,
  onClick,
  bookmarkType,
  id,
  platform,
}: BookMarkProps) {
  // isBookmarked 상태를 false로 초기화

  const [isBookmarked, setIsBookmarked] = useState(isChecked);

  const {
    updateBookmarkShortcuts,
    updateBookmarkPrograms,
    removeBookmarkShortcuts,
    removeBookmarkPrograms,
    bookmarkShortcuts,
    bookmarkPrograms,
  } = useUserStore((state) => ({
    updateBookmarkShortcuts: state.updateBookmarkShortcuts,
    updateBookmarkPrograms: state.updateBookmarkPrograms,
    removeBookmarkShortcuts: state.removeBookmarkShortcuts,
    removeBookmarkPrograms: state.removeBookmarkPrograms,
    bookmarkShortcuts: state.bookmarkShortcuts,
    bookmarkPrograms: state.bookmarkPrograms,
  }));

  useEffect(() => {
    setIsBookmarked(checkBookmarked(id, bookmarkType));

    if (bookmarkType === "프로그램") {
      setIsBookmarked(bookmarkPrograms.map((item) => item.id).includes(id));
    } else {
      setIsBookmarked(bookmarkShortcuts.map((item) => item.id).includes(id));
    }
  }, [id, bookmarkType]);

  // 클릭 이벤트 핸들러
  const handleBookmarkClick = () => {
    if (!isUserLoggedIn()) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    setIsBookmarked(!isBookmarked); // 상태 토글

    //false인 상태였다면 클릭후 true 상태니까 추가
    if (!isBookmarked) {
      if (bookmarkType === "프로그램") {
        //addProgramBookmark(id);
        updateBookmarkPrograms(platform ?? "figma", id);
      }
      if (bookmarkType === "단축키") {
        //addShortcutBookmark(id);
        updateBookmarkShortcuts(platform ?? "figma", id);
      }
    } else {
      if (bookmarkType === "프로그램") {
        //removeProgramBookmark(id);
        removeBookmarkPrograms(platform ?? "figma", id);
      }
      if (bookmarkType === "단축키") {
        //removeShortcutBookmark(id);
        removeBookmarkShortcuts(platform ?? "figma", id);
      }
    }
  };

  return (
    <div onClick={handleBookmarkClick} style={{ cursor: "pointer" }}>
      <Image
        src={
          isBookmarked
            ? "/icons/BookmarkSimpleYellow.svg"
            : isBlack
            ? "/icons/BookmarkSimple.svg"
            : "/icons/BookmarkSimpleGray.svg"
        }
        alt="bookmark icon"
        width={size ?? 24}
        height={size ?? 24}
      />
    </div>
  );
}
