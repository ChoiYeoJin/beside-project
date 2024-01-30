type TagProps = {
  text: string;
  checked?: boolean;
};

export default function Tag({ text, checked }: TagProps) {
  return (
    <>
      {checked && <p className=" bg-gray-600 rounded-xl px-4">{text}</p>}
      {!checked && (
        <div className="w-auto h-auto bg-gray-300 rounded-xl px-2 py-1">
          {text}
        </div>
      )}
    </>
  );
}
