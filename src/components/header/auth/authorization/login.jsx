import { useState } from "react";
import Modal from "../../../screens/blocks/modal";
import LoginForm from "./forms/loginForm";

export default function LoginModal () {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="app">
      <button className="app__open-modal-button" onClick={openLoginModal}>
        Авторизация
      </button>
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <LoginForm onClose={closeLoginModal} />
      </Modal>
    </div>
  );
};
