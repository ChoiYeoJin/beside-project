import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

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
      <Main>{children}</Main>
      <div className="w-full h-[100px]"></div>
      <Footer />
    </div>
  );
}
