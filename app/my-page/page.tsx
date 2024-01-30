import MainContainer from "../components/MainContainer";
import Image from "next/image";

export default function MyPage() {
  return (
    <MainContainer text="마이페이지">
      <div className="flex items-center">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden m-4">
          <Image
            src={"/icons/cat.png"}
            alt={"profile"}
            width={50}
            height={50}
          />
        </div>
        <div>
          <div>닉네임</div>
          <div>asdf21@asdf.com</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p>내가 작성한 글</p>
        </div>
        <div>
          <p>비밀번호 변경</p>
        </div>
        <div>
          <p>이용 약관</p>
        </div>
        <div>
          <p>공지사항</p>
        </div>
      </div>
    </MainContainer>
  );
}
