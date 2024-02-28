type Props = {
  green: string;
  black: string;
};

export default function GreenBlackText({ green, black }: Props) {
  return (
    <div className="text-xl font-semibold  text-[#222222]">
      <p className="text-primary inline leading-9">{green}&nbsp;</p>
      {black}
    </div>
  );
}
