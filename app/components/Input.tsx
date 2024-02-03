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
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className=" p-2 rounded w-full h-[50px] focus:border-primary focus:outline-none"
      />
      {errorMessage && (
        <p className="text-[#FF5C5C] text-[10px] pl-5">{errorMessage}</p>
      )}
    </div>
  );
}
