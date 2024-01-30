import MainContainer from "@/app/components/MainContainer";
import Keyboard from "../../components/Keyboard";
import SearchInput from "@/app/components/ClientSearchInput";

export default function List({ params }: { params: { id: string } }) {
  const data = [
    {
      id: "1",
      desc: "메뉴창 UI 보이기",
      keys: ["Z", "ctrl"],
    },
    {
      id: "2",
      desc: "메뉴창 UI 보이기",
      keys: ["B", "ctrl"],
    },
    {
      id: "3",
      desc: "메뉴창 UI 보이기",
      keys: ["C", "ctrl"],
    },
  ];
  return (
    <MainContainer text={params.id} isArrow={true}>
      <div className="flex justify-center">
        <Keyboard keys={data ? data[0].keys : []} />
      </div>
      <div className="">
        <SearchInput />
        <div>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex justify-between items-center">
                  <div key={item.id}>{item.desc}</div>
                  <div className="flex">
                    {item.keys.map((key, index) => {
                      return (
                        <p key={index} className="bg-primary m-1 p-1">
                          {key}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainContainer>
  );
}
