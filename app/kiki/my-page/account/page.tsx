"use client";
import Blank from "@/app/components/Blank";
import Input from "@/app/components/Input";
import RoundInput from "@/app/components/RoundInput";
import Dropdown from "@/app/components/Web/DropdownBox";
import { fetchDataAuthorized } from "@/utils/fetch";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";

type ProfileResponse = {
  message: "string";
  user: Profile;
};

export default function AccountPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [value, setValue] = useState("");
  const [selectedJob, setSelectedJob] = useState("없음");
  const [activeJob, setActiveJob] = useState(false);

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

  const handleItemClick = (item: string) => {
    setSelectedJob(item);
    setActiveJob(false);
  };

  const handleNicknameEditButton = () => {
    router.push("/pages/myPage/editName");
  };

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center bg-white rounded-[10px] py-[20px]">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden m-4">
          <Image
            src={"/icons/User-30.svg"}
            alt={"profile"}
            width={50}
            height={50}
          />
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-[#222222]">
              {profile?.user.username}
            </div>
          </div>
          <div className="text-sm text-gray300 ">{profile?.user.username}</div>
        </div>
      </div>

      <Blank height="60px" />
      <div className="relative">
        <div className="text-base font-semibold text-[#2B2B2B]">직업</div>
        <Blank height="20px" />

        <div
          onClick={() => setActiveJob(!activeJob)}
          className="p-2 rounded w-full h-[50px] focus:outline-none text-[16px] font-light border border-[#EEEEEE]"
        >
          {selectedJob}
        </div>
        {activeJob && (
          <Dropdown
            onClick={handleItemClick}
            items={["기획자", "디자이너", "개발자", "기타"]}
          />
        )}

        <Blank height="30px" />
        <div className="relative -z-10 text-base font-semibold text-[#2B2B2B]">
          연차
        </div>
        <Blank height="20px" />
        <Input
          type="text"
          placeholder=""
          value={value}
          onChange={handleInputValueChange}
        />

        <Blank height="30px" />
        <div className="text-base font-semibold text-[#2B2B2B]">
          키보드 운영체제
        </div>
      </div>
    </div>
  );
}
