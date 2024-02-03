import BackButton from "../components/Button/BackButton";
import HeaderContainer from "../components/header/HeaderContainer";
import AlarmIcon from "../components/icon/AlarmIcon";
import AlarmCard from "./AlarmCard";

export default function Alarm() {
  return (
    <div>
      <HeaderContainer>
        <BackButton />
        <div className="py-[18px]  font-semibold text-xl text-center tracking-[3%]">
          알림
        </div>
        <AlarmIcon alarmIconType="right" />
      </HeaderContainer>
      <div>
        <AlarmCard
          link="#"
          category="test"
          contents="키키팀에서 알리는 시스템 및 이용 안내에 대한 내용이 나타키팀에서 알리는 시스템 및 이용 안내에 대한 내용이 나타나게 됩니다 /"
          date="2023.12.12"
        />
      </div>
    </div>
  );
}
