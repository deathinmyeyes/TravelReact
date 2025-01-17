import React, { useState } from "react";

export default function ContactFormModal({ onClose }) {
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const name = event.target.name.value;
        const surname = event.target.surname.value;
        const message = event.target.message.value;

        let errorMessage = "";

        if (email === "" || name === "" || surname === "" || message === "") {
            errorMessage = "Введите все данные";
        } else if (!email.includes("@") || !email.includes(".")) {
            errorMessage = "Неверный формат электронной почты";
        } else if (name.length <= 3 || name.length > 50) {
            errorMessage = "Слишком короткое или длинное имя";
        } else if (surname.length <= 3 || surname.length > 50) {
            errorMessage = "Слишком короткая или длинная фамилия";
        } else if (message.length < 1) {
            errorMessage = "Причина обращения не должна быть пустой";
        }

        if (errorMessage) {
            setError(errorMessage);
            setSuccessMessage("");
        } else {
            setError("");
            setSuccessMessage("Вы успешно отправили заявку на обратную связь");

            setTimeout(() => {
                event.target.reset();
                onClose();
            }, 2000);
        }
    };

    return (
        <div className="contacts__modal">
            <div className="contacts__modal3" id="modal3">
                <form className="contacts__modal-body" id="contact" onSubmit={handleSubmit}>
                    <div className="contacts__modal-text">
                        <button className="contacts__back" onClick={onClose}>×</button>
                        <h1>Свяжитесь с нами</h1>

                        {error && (
                            <div className="contacts__error" style={{ color: "red", marginBottom: "20px" }}>
                                {error}
                            </div>
                        )}

                        {successMessage && (
                            <div className="contacts__success" style={{ color: "green", marginBottom: "20px" }}>
                                {successMessage}
                            </div>
                        )}

                        <div className="contacts__modal-text-wrapper">
                            <div className="contacts__modal-name">
                                <p>Имя</p>
                                <input type="text" id="name" name="name" placeholder="Иван" />
                            </div>
                            <div className="contacts__modal-surname">
                                <p>Фамилия</p>
                                <input type="text" id="surname" name="surname" placeholder="Иванов" />
                            </div>
                        </div>
                        <div className="contacts__modal-email">
                            <p>Почта</p>
                            <input type="email" id="email" name="email" placeholder="qwerty123@gmail.com" />
                        </div>
                        <div className="contacts__modal-message">
                            <p>Почему хотите связаться с нами?</p>
                            <input type="text" id="message" name="message" placeholder="Просто так" />
                        </div>
                        <button className="contacts__modal-call" id="submit" type="submit">
                            Связаться
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}