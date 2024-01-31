"use client";
import React, { useState } from "react";
import Image from "next/image";

type BookMarkProps = {
  isChecked: boolean;
  size?: number;
  isBlack?: boolean;
  onClick?: () => void;
};

export default function BookMark({
  isChecked,
  size,
  isBlack,
  onClick,
}: BookMarkProps) {
  // isBookmarked 상태를 false로 초기화
  const [isBookmarked, setIsBookmarked] = useState(isChecked);

  // 클릭 이벤트 핸들러
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked); // 상태 토글
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
        width={size ?? 30}
        height={size ?? 30}
      />
    </div>
  );
}
