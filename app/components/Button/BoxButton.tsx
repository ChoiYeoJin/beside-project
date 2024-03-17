type BoxButtonProps = {
  text: string;
  color: string;
  bold: boolean;
};

export default function BoxButton({ text, color, bold }: BoxButtonProps) {
  // 클래스 이름을 동적으로 생성
  const className = `px-[20px] py-[10px] rounded-[4px] hover:bg-opacity-90 ${
    bold ? "font-bold" : ""
  } bg-[${color}]`;

  return <p className={className}>{text}</p>;
}
