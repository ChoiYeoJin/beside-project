import Blank from "../Blank";
import ModalFrame from "./ModalFrame";

type WithdrawalModalProps = {
  isOpen: boolean;
  close: () => void;
};

export default function WithdrawalModal({
  isOpen,
  close,
}: WithdrawalModalProps) {
  return (
    <ModalFrame onClick={close}>
      <Blank height="40px" />
      <div className="text-[28px] text-[#2B2B2B]">회원탈퇴가</div>
      <div className="text-[28px] text-[#2B2B2B]">
        정상적으로 이루어졌습니다.
      </div>
    </ModalFrame>
  );
}
