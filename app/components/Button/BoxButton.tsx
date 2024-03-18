type BoxButtonProps = {
  text: string;
  color: string;
  bold?: boolean;
  onClick?: () => void;
};

export default function BoxButton({
  text,
  color,
  bold,
  onClick,
}: BoxButtonProps) {
  // 클래스 이름을 동적으로 생성
  const className = `cursor-pointer px-[20px] py-[10px] rounded-[4px] hover:bg-opacity-50 ${
    bold ? "font-bold" : ""
  } bg-[${color}]`;

  return (
    <p className={className} onClick={onClick}>
      {text}
    </p>
  );
}
