"use client";

import Image from "next/image";
import BoxButton from "../Button/BoxButton";
import { useRouter } from "next/navigation";
import { isUserLoggedIn } from "@/utils/storage";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchDataAuthorized } from "@/utils/fetch";
import useModal from "@/app/hooks/useModal";
import LoginModal from "../modal/LoginModal";

type ProfileResponse = {
  message: "string";
  user: Profile;
};

export default function WebHeader() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  const {
    data: profile,
    isLoading,
    error,
  } = useQuery<ProfileResponse, Error>(
    "profile",
    () => fetchDataAuthorized<ProfileResponse>("/mypage/token"),
    {
      enabled: isLogin,
      staleTime: Infinity,
    }
  );

  const handleLoginButtonClick = () => {
    //router.push("/login");
    openModal();
  };

  const handleJoinButtonClick = () => {
    router.push("/register");
  };

  const handleLogoClick = () => {
    router.push("/kiki");
  };

  const handleLogoutClick = () => {
    localStorage.clear();
    setIsLogin(false);
    router.push("/kiki");
  };

  const handleMyPageClick = () => {
    router.push("/kiki/my-page/account");
  };

  useEffect(() => {
    if (isUserLoggedIn()) {
      setIsLogin(true);
    }
    console.log(profile);
  }, [profile]);

  return (
    <header className="w-full h-[80px] px-[120px] border-b border-[#EEEEEE] z-9999">
      <div className="flex justify-between">
        <p className="py-[28px]  cursor-pointer" onClick={handleLogoClick}>
          <Image
            src={"/icons/web-icons/Frame 920.svg"}
            alt="logo"
            width={94}
            height={24}
          />
        </p>
        <div className="flex">
          {!isLogin && (
            <>
              <div className="flex py-[20px]">
                <div>
                  <BoxButton
                    text="로그인"
                    color="#ffffff"
                    onClick={handleLoginButtonClick}
                  />
                </div>
                {/* <div>
                  <BoxButton
                    text="회원가입"
                    color="#F8F8F8"
                    bold={true}
                    onClick={handleJoinButtonClick}
                  />
                </div> */}
              </div>
            </>
          )}
          {isLogin && (
            <div className="flex items-center gap-[40px]">
              <div>
                <BoxButton
                  text="내 단축키"
                  color="#F8F8F8"
                  bold={true}
                  onClick={handleJoinButtonClick}
                />
              </div>
              <div className="flex items-center gap-[10px] group relative h-[40px]">
                <div>
                  <Image
                    src={"/icons/web-icons/UserAvatar.svg"}
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </div>
                <div>{profile?.user.username}</div>
                <div
                  className="group-hover:block dropdown-menu absolute hidden h-auto top-full  rounded-[10px] bg-white border border-[#eee]"
                  style={{ boxShadow: "0px 0px 20px 0 rgba(0,0,0,0.04)" }}
                >
                  <ul className="">
                    <li className="px-[20px] pt-[10px] hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out ">
                      <div className="p-[10px]" onClick={handleMyPageClick}>
                        마이페이지
                      </div>
                    </li>
                    <li
                      className="px-[20px] pb-[10px] hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out "
                      onClick={handleLogoutClick}
                    >
                      <div className="p-[10px]">로그아웃</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <LoginModal isOpen={isOpen} close={closeModal} />
    </header>
  );
}
