import { useFooterStore } from "@/store/FooterStore";
import IntroduceLoginModal from "./IntroduceLoginModal";
import useModal from "@/app/hooks/useModal";
import { useEffect } from "react";

const ModalController = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const activeTab = useFooterStore((state) => state.activeTab);
  useEffect(() => {
    //not logged in
    openModal();
  }, []);
  return (
    <>
      <button onClick={openModal}></button>
      {isOpen && (
        <IntroduceLoginModal
          isOpen={isOpen}
          tabName={activeTab}
          close={closeModal}
        />
      )}
    </>
  );
};

export default ModalController;
