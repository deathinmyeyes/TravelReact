import { useState } from "react";
import ContactFormModal from "./modal";

export default function ContactBlock() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="contacts__block">
                <h1>Контакты</h1>
                <div className="contacts__contact">
                    <img src="./img/contact_images/contacts_phone.svg" alt="svg" />
                    <p>8-800-555-35-35</p>
                </div>
                <div className="contacts__contact">
                    <img src="./img/contact_images/contacts_mail.svg" alt="svg" />
                    <p>TRAVEL.guide@contact.us</p>
                </div>
                <div className="contacts__contact">
                    <img src="./img/contact_images/contacts_location.svg" alt="svg" />
                    <p>Республика Татарстан, г. Елабуга, ул. Норд-Драйв 7А.</p>
                </div>
                <button className="contacts__call" onClick={openModal}>Обратная связь</button>
                <div className="contacts__picture">
                    <img src="./img/contact_images/contacts_operators.png" alt="png" className="contacts__operators" />
                </div>
            </div>

            {isModalOpen && (
                <div className="contact__modals active">
                    <ContactFormModal onClose={closeModal} />
                </div>
            )}
        </>
    );
}