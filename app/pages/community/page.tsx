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
      </div>
      <Footer />
    </div>
  );
}
