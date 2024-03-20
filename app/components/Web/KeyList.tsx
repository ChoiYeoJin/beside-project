type KeyListProps = {
  keys: string[];
  isActive: boolean;
  startIndex?: number;
};

export default function KeyList({ keys, isActive, startIndex }: KeyListProps) {
  const keyStyle = isActive
    ? "flex items-center justify-center p-1 min-w-5 h-[20px] ml-[5px] rounded-[4px] text-[14px] font-medium bg-primary bg-opacity-10 text-primary border border-primary"
    : "flex items-center justify-center p-1 min-w-5 h-[20px] ml-[5px] rounded-[4px] text-[14px] font-medium bg-gray300 bg-opacity-10 text-gray300 border border-gray300 border-opacity-50";

  return (
    <>
      {keys.map((key, index) => (
        <div
          key={index + (startIndex ?? 0)}
          className={keyStyle}
          style={{
            fontSize: "clamp(12px, 2.5vw, 15px)",
          }}
        >
          {key}
        </div>
      ))}
    </>
  );
}
