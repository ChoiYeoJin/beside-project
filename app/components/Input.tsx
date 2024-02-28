import Image from "next/image";

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
}: InputProps) {
  return (
    <div>
      <div className="relative">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className=" p-2 rounded w-full h-[50px] focus:border-primary focus:outline-none text-[16px] font-light"
        />
        {errorMessage && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Image
              src={"/icons/ErrorIcon.svg"}
              alt="logo"
              width={20}
              height={20}
            />
          </div>
        )}
      </div>
      {errorMessage && (
        <p className="text-[#FF5C5C] text-[10px] pl-5">{errorMessage}</p>
      )}
    </div>
  );
}
