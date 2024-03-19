import Blank from "../components/Blank";
import Container from "../components/Container";
import HomePrograms from "../components/HomePrograms";
import HomeSearchInput from "../components/HomeSearchInput";
import RadioContainer from "../components/RadioContainer";
import RankList from "../components/Web/RankList";
import WebHeader from "../components/header/WebHeader";

export default function Home() {
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
            <RadioContainer items={["피그마", "excel"]} />
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
    </Container>
  );
}
