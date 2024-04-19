import { useEffect } from "react";
import Blank from "../components/Blank";
import RoundButton from "../components/Button/RoundButton";
import Container from "../components/Container";
import HomePrograms from "../components/HomePrograms";
import HomeSearchInput from "../components/HomeSearchInput";
import RadioContainer from "../components/RadioContainer";
import RankList from "../components/Web/RankList";

export default function Home() {
  // const { isOpen, openModal, closeModal } = useModal();

  // useEffect(() => {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const state = queryParams.get("state");
  //   openModal();
  //   if (state) {
  //     openModal();
  //   }
  // }, []);

  return (
    <Container>
      <Blank height="40px" />
      <div className="flex justify-center flex-col items-center">
        <div className="max-w-[548px] w-full">
          <HomeSearchInput />
        </div>
        <Blank height="40px" />
        <div className="py-2">
          <RadioContainer items={["전체 프로그램", "문서", "디자인", "개발"]} />
        </div>
        <Blank height="20px" />
        <HomePrograms />
        <Blank height="80px" />
        <div className="flex flex-col justify-start">
          <div>
            <p className="text-[#2B2B2B] font-semibold">
              지금 많이 찾는 단축키
            </p>
            <p></p>
          </div>
          <Blank height="20px" />
          <div>
            <RadioContainer items={["전체"]} />
          </div>
          <Blank height="30px" />
          <div className="flex">
            <div className="w-[384px]">
              <RankList itemType="단축키" />
            </div>
            <div className="w-[384px]">
              <RankList itemType="단축키" startIndex={5} />
            </div>
          </div>
        </div>
      </div>
      <Blank height="35px" />
      <div className="absolute w-full h-[80px] bg-[#F8F8F8] left-0 px-[120px] flex items-center justify-between">
        <div className="flex">
          <div className="text-primary text-xl font-semibold ">
            홈페이지 사용 경험을 들려주세요
          </div>
          <div className="text-[#ccc] text-sm ml-5">
            키키는 여러분의 경험을 바탕으로 성장합니다. 홈페이지를 이용하며
            느꼈던 점들을 키키 팀에게 전해주세요.
          </div>
        </div>
        <div>
          <RoundButton text="설문조사 하러 가기" />
        </div>
      </div>
      {/* <WithdrawalModal isOpen={isOpen} close={closeModal} /> */}
      <div id="modal-root"></div>
    </Container>
  );
}
