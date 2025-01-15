import { useState } from "react";
import Modal from "../../../screens/blocks/modal";
import RegisterForm from "../../../screens/autorization/register/registerForm";

export default function RegisterModal () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <button className="app__open-modal-button" onClick={openModal}>
        Зарегистрироваться
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <RegisterForm onClose={closeModal} />
      </Modal>
    </div>
  );
};
