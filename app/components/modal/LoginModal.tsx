import Image from "next/image";
import Blank from "../Blank";
import ModalFrame from "./ModalFrame";
import GoogleLogin from "../auth/GoogleLogin";
import KakaoLogin from "../auth/KakaoLogin";
type LoginModalProps = {
  isOpen: boolean;
  close: () => void;
};

export default function LoginModal({ isOpen, close }: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <ModalFrame onClick={close}>
      <Blank height="40px" />
      <div className="flex justify-center flex-col items-center">
        <div className="text-[28px] text-[#2B2B2B]">
          키키에 오신 것을 환영합니다
        </div>
        <div className="text-[16px] text-[#2B2B2B]">
          지금 로그인하고 나만의 단축키 모음집을 만드세요.
        </div>
        <Blank height="40px" />
        <GoogleLogin />
        <Blank height="10px" />
        <KakaoLogin />
        <Blank height="40px" />
        <div className="w-[390px] font-normal text-[#A5A5A5] text-sm">
          로그인은 개인의 정보 보호 정책 및 서비스 약관에 동의하는 것을
          의미하며, 서비스 이용을 위해 이메일과 이름, 프로필 이미지를
          수집합니다.
        </div>
      </div>
    </ModalFrame>
  );
}
