type HeaderContainerProps = {
  children: React.ReactNode;
};

export default function HeaderContainer({ children }: HeaderContainerProps) {
  return <div className="w-full h-[60px] bg-gray50">{children}</div>;
}
