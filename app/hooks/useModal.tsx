// hooks/useModal.js
import { isUserLoggedIn } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const openModal = () => {
    if (isUserLoggedIn()) {
      return;
    }
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;
