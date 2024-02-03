import TextButton from "./TextButton";

type BottomButtonProps = {
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  color: string;
  text: string;
  backgroundColor?: string;
};

export default function BottomButton({
  onClick,
  color,
  text,
  backgroundColor,
}: BottomButtonProps) {
  return (
    <div className="fixed bottom-[50px] left-0 right-0 px-[16px]">
      <TextButton
        backgroundColor={backgroundColor}
        color={color}
        text={text}
        onClick={onClick}
      />
    </div>
  );
}
