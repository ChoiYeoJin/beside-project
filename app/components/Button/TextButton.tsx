type TextButtonProps = {
  text: string;
  color?: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function TextButton({ text, color, onClick }: TextButtonProps) {
  const buttonClass = `text-[16px] h-[60px] font-bold rounded-[4px] text-white w-full`;
  return (
    <button
      style={{ backgroundColor: color ?? "#222222" }}
      className={buttonClass}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
