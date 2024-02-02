"use client";
import React, { useState } from "react";
import Image from "next/image";

type BookMarkProps = {
  isChecked: boolean;
  size?: number;
  isBlack?: boolean;
  onClick?: () => void;
  bookmarkType?: string;
  id?: string;
};

export default function BookMark({
  isChecked,
  size,
  isBlack,
  onClick,
  bookmarkType,
  id,
}: BookMarkProps) {
  // isBookmarked 상태를 false로 초기화
  const [isBookmarked, setIsBookmarked] = useState(isChecked);

  // 클릭 이벤트 핸들러
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked); // 상태 토글
    if (bookmarkType === "프로그램") {
      if (id) addProgramBookmark(id);
    }
    if (bookmarkType === "단축키") {
      if (id) addShortcutBookmark(id);
    }
  };

  return (
    <div onClick={handleBookmarkClick} style={{ cursor: "pointer" }}>
      <Image
        src={
          isBookmarked
            ? "/icons/BookmarkSimpleBlack.svg"
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
