type KeyListProps = {
  keys: string[];
  isActive: boolean;
};

export default function KeyList({ keys, isActive }: KeyListProps) {
  return (
    <>
      {keys.map((key, index) => (
        <>
          {isActive && (
            <div
              key={key}
              className="flex items-center justify-center w-[40px] h-[40px] ml-[5px] rounded-[4px] text-[20px] font-medium bg-primary bg-opacity-10 text-primary border  border-primary"
            >
              {key}
            </div>
          )}
        </>
      ))}
    </>
  );
}
