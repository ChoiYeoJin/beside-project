type BoxButtonProps = {
  text: string;
  color?: string;
  bold?: boolean;
  onClick?: () => void;
};

export default function RoundButton({
  text,
  color,
  bold,
  onClick,
}: BoxButtonProps) {
  // 클래스 이름을 동적으로 생성
  const className = `cursor-pointer px-[20px] py-[10px] rounded-[4px] hover:bg-opacity-70  transition duration-300 ease-in-out ${
    bold ? "font-bold" : ""
  } bg-primary text-white text-sm p-4 rounded-[30px]`;

  return (
    <p className={className} onClick={onClick}>
      {text}
    </p>
  );
}
