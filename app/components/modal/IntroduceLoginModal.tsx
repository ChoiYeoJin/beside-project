import Image from "next/image";
import Blank from "../Blank";
import Link from "next/link";

type IntroduceLoginModalProps = {
  tabName: string;
  isOpen: boolean;
  close: () => void;
};

export default function IntroduceLoginModal({
  tabName,
  isOpen,
  close,
}: IntroduceLoginModalProps) {
  if (!isOpen) return null;

  const getTabName = (tabName: string) => {
    switch (tabName) {
      case "myPage":
        return "마이페이지";
      case "bookmark":
        return "즐겨찾기";
      case "community":
        return "질문게시판";
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-100 bg-[#222222]/80 backdrop-blur-sm">
      <div className="relative bg-white w-[300px] h-[258px] rounded-[10px] overflow-hidden">
        <Blank height="30px" />
        <div className="flex justify-center">
          <Image
            src="/icons/logo_keykey.svg"
            alt="logo"
            width={40}
            height={40}
          />
        </div>
        <Blank height="30px" />
        <div className="flex flex-col items-center justify-center">
          <div className="text-[16px] font-medium leading-[150%]">
            키키 회원이 되시면
          </div>
          <div className="text-[16px] font-medium leading-[150%]">
            &apos;{getTabName(tabName)}&apos;을(를) 이용할 수 있습니다.
          </div>
          <div className="text-[16px] font-bold leading-[150%]">
            지금 바로 가입할까요?
          </div>
        </div>
        <Blank height="32px" />
        <div className="flex">
          <div
            onClick={close}
            className="w-[150px] h-[56px] bg-gray100 text-gray300 text-[15px] font-medium flex items-center justify-center"
          >
            다음에 할게요
          </div>
          <Link href={"/login"}>
            <div className="w-[150px] h-[56px] bg-primary text-[#222222] text-[15px] font-bold flex items-center justify-center">
              네, 가입할게요
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
