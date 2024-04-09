type Props = {
  green: string;
  black: string;
};

export default function GreenBlackText({ green, black }: Props) {
  return (
    <div className="text-xl   text-[#CCCCCC]">
      <p className="text-primary inline leading-9 mr-[5px] font-bold">
        {green}&nbsp;
      </p>
      {black}
    </div>
  );
}
