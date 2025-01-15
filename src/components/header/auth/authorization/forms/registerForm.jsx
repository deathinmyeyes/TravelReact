import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordWithoutSpaces = password.replaceAll(" ", "");

    if (email === "" || password === "" || repassword === "") {
      toast.error("Введите все данные");
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      toast.error("Неверный формат электронной почты");
      return;
    } else if (name.length <= 1 || name.length > 50) {
      toast.error("Неправильное имя");
      return;
    } else if (password !== repassword) {
      toast.error("Пароли не совпадают");
      return;
    } else if (passwordWithoutSpaces.length === 0) {
      toast.error("Пароль не может состоять из пробелов");
      return;
    } else if (passwordWithoutSpaces.length < 8) {
      toast.error("Пароль слишком короткий");
      return;
    }

    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      toast.error("Этот email уже зарегистрирован");
      return;
    }

    const response = await sendDataToServer({ email, name, password });
    if (response.ok) {
      toast.success("Вы зарегистрированы");
    } else {
      toast.error("Ошибка при регистрации");
    }
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await fetch(
        `https://6752c922f3754fcea7b99892.mockapi.io/users?email=${email}`
      );
      if (response.ok) {
        const users = await response.json();
        return users.length > 0;
      }
      return false;
    } catch (error) {
      toast.error("Ошибка при проверке email");
      return false;
    }
  };

  const sendDataToServer = async (data) => {
    try {
      const response = await fetch("https://6752c922f3754fcea7b99892.mockapi.io/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      toast.error("Ошибка при отправке данных");
      return { ok: false };
    }
  };

  return (
    <>
      <div className="register__wrapper">
        <form onSubmit={handleSubmit} className="register">
          <p className="register__welcome">Добро пожаловать</p>
          <div className="register__login-wrap">
            <p className="register__autorization">Регистрация</p>
            <div className="">
              <p className="register__login-p">Есть аккаунт?</p>
              <Link className="register__login-a" to="/login">Авторизуйтесь</Link>
            </div>
          </div>
          <p className="register__email-p">Введите свой Email</p>
          <input
            className="register__email-inp"
            type="email"
            placeholder="qwerty123@mail.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="register__personal-p">Логин</p>
          <input
            className="register__personal-inp"
            type="text"
            placeholder="qwerty"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="register__password-p">Введите пароль</p>
          <input
            className="register__password-inp"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="register__confirm-password-p">Подтвердите пароль</p>
          <input
            className="register__confirm-password-inp"
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          <button className="register__button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}