import RadioContainer from "../components/RadioContainer";

export default function CommunityCategory() {
  return (
    <div
      className="grid grid-cols-2 gap-y-[10px] "
      style={{ gridTemplateColumns: "70px auto" }}
    >
      <div className="flex items-center">
        <div className="text-[14px] text-gray300 font-semibold w-auto h-[17px] mr-[20px] tracking-[1%]">
          카테고리
        </div>
      </div>
      <RadioContainer
        items={["추천", "전체", "필수", "프로그램", "프로그램", "프로그램"]}
      />
      <div className="flex items-center">
        <div className="text-[14px] text-gray300 font-semibold w-[50px]  h-[17px]  mr-[20px] tracking-[1%]">
          프로그램
        </div>
      </div>
      <RadioContainer items={["추천", "전체", "필수"]} />
    </div>
  );
}
