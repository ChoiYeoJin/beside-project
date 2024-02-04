type KeyListProps = {
  keys: string[];
  isActive: boolean;
};

export default function KeyList({ keys, isActive }: KeyListProps) {
  const keyStyle = isActive
    ? "flex items-center justify-center w-[40px] h-[40px] ml-[5px] rounded-[4px] text-[20px] font-medium bg-primary bg-opacity-10 text-primary border border-primary"
    : "flex items-center justify-center w-[40px] h-[40px] ml-[5px] rounded-[4px] text-[20px] font-medium bg-gray300 bg-opacity-10 text-gray300 border border-gray300 border-opacity-50";

  return (
    <>
      {keys.map((key, index) => (
        <div
          key={index}
          className={keyStyle}
          style={{
            fontSize: "clamp(12px, 2.5vw, 15px)", // 글자 크기를 동적으로 조정
          }}
        >
          {key}
        </div>
      ))}
    </>
  );
}
