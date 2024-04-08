type TitleProps = {
  text: string;
};

export default function Title({ text }: { text: string }) {
  return <div className="text-base font-semibold text-[#2B2B2B]">{text}</div>;
}
