import CommunityCard from "../components/CommunityCard";
import MainContainer from "../components/MainContainer";
import RadioContainer from "../components/RadioContainer";

export default function Community() {
  return (
    <MainContainer text="커뮤니티">
      <RadioContainer items={["전체", "기획", "개발", "디자인"]} />
      <div>
        <CommunityCard
          userName="kiki"
          createdAt="2024.01.30"
          imgSrc="/icons/cat.png"
          mainText="현생 고양이를 포함한 모든 고양이과 동물들이 공통 조상으로부터 약 2000만 년 전에 분화한 이후, 들고양이는 10만~7만여 년 전부터 출현했으며, 가축화는 약 5만여 년 전 이집트나 메소포타미아 등 중동 지역의 아프리카들고양이(Felis lybica)가 식량 확보 등의 이유로 도시 등 인간의 대규모 정착지에 나와 살던 것을 인간이 키우기 시작한 것이 오늘날 고양이의 유래다. "
        />
      </div>
    </MainContainer>
  );
}
