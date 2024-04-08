import Image from "next/image";
import { useState } from "react";
import EyeIcon from "./icon/EyeIcon";

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  isPassword?: boolean;
};

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
  isPassword,
}: InputProps) {
  const [eyeState, setEyeState] = useState(true);
  const [inputType, setInputType] = useState(type);
  const handleClick = () => {
    setEyeState(!eyeState);
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div>
      <div className="relative">
        <input
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className=" p-5 rounded w-full h-[60px] focus:border-primary focus:outline-none text-[16px] font-light border border-[#EEEEEE]"
        />
        {isPassword && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <EyeIcon eyeState={eyeState} onClick={handleClick} />
          </div>
        )}
      </div>
      {errorMessage && (
        <div className="flex items-center mt-[10px]">
          <Image
            src={"/icons/ErrorIcon.svg"}
            alt="logo"
            width={13}
            height={13}
          />
          <p className="text-[#FF5C5C] text-[16px] pl-[5px]">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
