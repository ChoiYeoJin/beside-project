type TextButtonProps = {
  text: string;
  color?: string;
  backgroundColor?: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function TextButton({
  text,
  color,
  onClick,
  backgroundColor,
}: TextButtonProps) {
  const buttonClass = `text-[18px] h-[60px] font-bold rounded-[4px] text-white w-full`;
  return (
    <button
      style={{
        backgroundColor: backgroundColor ?? "#F8F8F8",
        color: color ?? "white",
      }}
      className={buttonClass}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
