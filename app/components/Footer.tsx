import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="fixed bottom-0 w-full h-[82px] bg-white pt-4">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center">
            <Link href={"/home"}>
              <Image
                src="/icons/tapbar-icons/House.svg"
                alt="logo"
                width={28}
                height={28}
              />
            </Link>
            <div className="text-[10px]">홈</div>
          </div>
          <div className="flex flex-col items-center">
            <Link href={"/programs"}>
              <Image
                src="/icons/tapbar-icons/Layout.svg"
                alt="logo"
                width={28}
                height={28}
              />
            </Link>
            <div className="text-[10px]">프로그램</div>
          </div>
          <div className="flex flex-col items-center">
            <Link href={"/bookmark"}>
              <Image
                src="/icons/tapbar-icons/BookMarkSimple.svg"
                alt="logo"
                width={28}
                height={28}
              />
            </Link>
            <div className="text-[10px]">즐겨찾기</div>
          </div>
          <div className="flex flex-col items-center">
            <Link href={"/community"}>
              <Image
                src="/icons/tapbar-icons/ChatsCircle.svg"
                alt="logo"
                width={28}
                height={28}
              />
            </Link>
            <div className="text-[10px]">질문게시판</div>
          </div>
          <div className="flex flex-col items-center">
            <Link href={"/my-page"}>
              <Image
                src="/icons/tapbar-icons/User.svg"
                alt="logo"
                width={28}
                height={28}
              />
            </Link>
            <div className="text-[10px]">마이페이지</div>
          </div>
        </div>
      </div>
    </>
  );
}
