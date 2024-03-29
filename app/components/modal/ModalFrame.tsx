import Image from "next/image";
import ReactDOM from "react-dom";

type ModalFrameProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function ModalFrame({ children, onClick }: ModalFrameProps) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null; // modal-root가 존재하지 않으면 null을 반환합니다.

  return ReactDOM.createPortal(
    <div
      onClick={onClick}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-9999 bg-[#222222]/80 backdrop-blur-sm"
    >
      <div className="relative bg-white py-[60px] w-[600px] h-auto rounded-[10px] overflow-hidden">
        <div className="absolute top-5 right-5" onClick={onClick}>
          <Image
            src={"/icons/web-icons/close.svg"}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/icons/web-icons/symbol.svg"
            alt="close"
            width={50}
            height={50}
          />
        </div>
        {children}
      </div>
    </div>,
    modalRoot // 여기서는 modalRoot가 null이 아니라고 확신할 수 있습니다.
  );
}
