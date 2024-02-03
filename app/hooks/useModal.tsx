// hooks/useModal.js
import { useRouter } from "next/navigation";
import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    router.back();

    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;
