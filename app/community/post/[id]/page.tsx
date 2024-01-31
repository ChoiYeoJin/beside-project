"use client";
import CommentCard from "@/app/components/CommentCard";
import CommunityCard from "@/app/components/CommunityCard";
import Header from "@/app/components/header/Header";
import MainContainer from "@/app/components/MainContainer";
import { useEffect, useState } from "react";

export default function Post({ params }: { params: { id: string } }) {
  const [commentValue, setCommentValue] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(event.target.value);
  };

  useEffect(() => {
    if (commentValue !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [commentValue]);

  return (
    <div>
      <Header isArrow={true} text={""} />
      <CommunityCard
        userName="kiki"
        createdAt="2024.01.30"
        imgSrc="/icons/cat.png"
        mainText="현생 고양이를 포함한 모든 고양이과 동물들이 공통 조상으로부터 약 2000만 년 전에 분화한 이후, 들고양이는 10만~7만여 년 전부터 출현했으며, 가축화는 약 5만여 년 전 이집트나 메소포타미아 등 중동 지역의 아프리카들고양이(Felis lybica)가 식량 확보 등의 이유로 도시 등 인간의 대규모 정착지에 나와 살던 것을 인간이 키우기 시작한 것이 오늘날 고양이의 유래다. "
        isMain={false}
      />
      <CommentCard
        userName="kiki"
        createdAt="2024.01.30"
        imgSrc="/icons/cat.png"
        mainText="ㅇㅇ"
        isMain={true}
      />
      <CommentCard
        userName="kiki"
        createdAt="2024.01.30"
        imgSrc="/icons/cat.png"
        mainText="ㅇddddddddddddddddddddddddddddddddㅇ"
        isMain={true}
      />
      <div className="h-[120px] w-full absolute bottom-0 bg-white px-4 pt-5">
        <input
          type="text"
          value={commentValue}
          onChange={handleComment}
          className="w-full h-[49px] border border-black/10 rounded-[5px] pl-5 pr-14"
        />
        <div className="absolute right-[36px] top-[35px]">
          {isActive && <div className="text-primary">게시</div>}
          {!isActive && <div className="text-gray300">게시</div>}
        </div>
      </div>
    </div>
  );
}
