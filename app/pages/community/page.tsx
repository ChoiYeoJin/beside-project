import Link from "next/link";
import CommunityCard from "@/app/components/CommunityCard";
import MainContainer from "@/app/components/MainContainer";
import RadioContainer from "@/app/components/RadioContainer";
import ClientSearchInput from "@/app/components/ClientSearchInput";
import Blank from "@/app/components/Blank";
import Main from "@/app/components/Main";
import HeaderContainer from "@/app/components/header/HeaderContainer";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import CommunityCategory from "../../components/CommunityCategory";
import PostList from "./PostList";
import AlarmIcon from "@/app/components/icon/AlarmIcon";

export default function Community() {
  return (
    <div>
      <HeaderContainer>
        <div>
          <div className="py-[18px] ml-4 font-semibold text-xl">질문게시판</div>
        </div>
        <Link href={"../community/new"}>
          <div className="absolute right-[24px] top-[18px]">
            <Image
              src={"/icons/PencilSimpleLine.svg"}
              alt="logo"
              width={24}
              height={24}
            />
          </div>
        </Link>
        <AlarmIcon alarmIconType="left" />
      </HeaderContainer>
      <Main>
        <Blank height="30px" />
        {/* <ClientSearchInput /> */}
        <Blank height="30px" />
        <CommunityCategory />
        <Blank height="30px" />
      </Main>
      <div className="border-b border-gray100"></div>
      <div>
        <PostList />
        {/* <Link href={"../community/post/1"}>
          <CommunityCard
            userName="kiki"
            createdAt="2024.01.30"
            imgSrc="/icons/cat.png"
            mainText="현생 고양이를 포함한 모든 고양이과 동물들이 공통 조상으로부터 약 2000만 년 전에 분화한 이후, 들고양이는 10만~7만여 년 전부터 출현했으며, 가축화는 약 5만여 년 전 이집트나 메소포타미아 등 중동 지역의 아프리카들고양이(Felis lybica)가 식량 확보 등의 이유로 도시 등 인간의 대규모 정착지에 나와 살던 것을 인간이 키우기 시작한 것이 오늘날 고양이의 유래다. "
            isMain={true}
          />
        </Link> */}
      </div>
      <Footer />
    </div>
  );
}
