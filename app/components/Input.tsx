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
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded w-full"
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </>
  );
}
