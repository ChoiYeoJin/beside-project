import Footer from "./Footer";
import Header from "./Header";

type MainContainerProps = {
  text?: string;
  children: React.ReactNode;
  imgSrc?: string;
  isArrow?: boolean;
};

export default function MainContainer({
  text,
  children,
  imgSrc,
  isArrow,
}: MainContainerProps) {
  return (
    <div>
      <Header text={text ?? "키키"} isArrow={isArrow} />
      <div className="max-w-3xl mx-auto px-[16px]">{children}</div>
      <div className="w-full h-[100px]"></div>
      <Footer />
    </div>
  );
}
