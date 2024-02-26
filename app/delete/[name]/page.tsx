"use client";
import Blank from "@/app/components/Blank";
import BackButton from "@/app/components/Button/BackButton";
import TextButton from "@/app/components/Button/TextButton";
import Container from "@/app/components/Container";
import GreenBlackText from "@/app/components/GreenBlackText";
import Main from "@/app/components/Main";
import HeaderContainer from "@/app/components/header/HeaderContainer";
import HeaderMiddleText from "@/app/components/header/HeaderMiddleText";
import { useRouter } from "next/navigation";

export default function Delete({ params }: { params: { name: string } }) {
  const router = useRouter();
  const handleBackHomeButton = () => {
    router.push("/pages/home");
  };
  return (
    <Container>
      <HeaderMiddleText text="회원탈퇴" />
      <Blank height="50px" />
      <Main>
        <div className="flex flex-col items-center">
          <GreenBlackText green={decodeURIComponent(params.name)} black="님" />
          <div className="text-xl font-semibold  text-[#222222]">
            정말로 탈퇴하시겠어요?
          </div>
          <Blank height="30px" />
          <div className="flex flex-col items-center px-[20px] w-full gap-[10px]">
            <div className="flex justify-between w-full bg-white h-[62px] px-[30px] py-[10px] rounded-lg">
              <div className="flex flex-col text-[14px] ">
                <div className="">지금까지 즐겨찾기한</div>
                <div className="font-bold">프로그램</div>
              </div>
              <GreenBlackText green="10" black="개" />
            </div>
            <div className="flex justify-between w-full bg-white h-[62px] px-[30px] py-[10px] rounded-lg">
              <div className="flex flex-col text-[14px] ">
                <div className="">지금까지 즐겨찾기한</div>
                <div className="font-bold">단축키</div>
              </div>
              <GreenBlackText green="10" black="개" />
            </div>
            <div className="flex justify-between w-full bg-white h-[62px] px-[30px] py-[10px] rounded-lg">
              <div className="flex flex-col text-[14px] ">
                <div className="">지금까지 질문게시판에</div>
                <div className="font-bold">올린 질문</div>
              </div>
              <GreenBlackText green="10" black="개" />
            </div>
          </div>
        </div>
        <Blank height="30px" />
        <div className="flex flex-col items-center">
          <div>탈퇴하시면 더이상</div>
          <div>즐겨찾기와 질문게시판을 이용하실 수 없습니다.</div>
        </div>
        <Blank height="148px" />
        <TextButton
          text="홈 화면으로 돌아가기"
          onClick={handleBackHomeButton}
          backgroundColor="#33C481"
        />
        <Blank height="10px" />
        <button className="text-[18px] h-[60px]  rounded-[4px] text-gray300 w-full border border-gray200">
          회원탈퇴
        </button>
        <Blank height="50px" />
      </Main>
    </Container>
  );
}
