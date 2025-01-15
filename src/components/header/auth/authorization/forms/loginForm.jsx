import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordWithoutSpaces = password.replaceAll(" ", "");

    if (email === "" || password === "") {
      toast.error("Введите все данные");
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      toast.error("Неверный формат электронной почты");
      return;
    } else if (passwordWithoutSpaces.length === 0) {
      toast.error("Пароль не может состоять из пробелов");
      return;
    } else if (passwordWithoutSpaces.length < 8) {
      toast.error("Пароль слишком короткий");
      return;
    }

    const response = await checkUserOnServer(email, password);
    if (response.success) {
      toast.success("Вы успешно вошли в свой аккаунт");
      window.location.href = "/profile";
    } else {
      toast.error(response.message);
    }
  };

  const checkUserOnServer = async (email, password) => {
    try {
      const response = await fetch(
        `https://6752c922f3754fcea7b99892.mockapi.io/users?email=${email}`
      );
      const users = await response.json();

      if (users.length === 0) {
        return { success: false, message: "Пользователь с таким email не найден" };
      } else {
        const user = users.find((user) => user.password === password);
        if (user) {
          document.cookie = `user=${JSON.stringify(user)}; path=/; max-age=${60 * 60 * 24}`;
          return { success: true };
        } else {
          return { success: false, message: "Неверный пароль" };
        }
      }
    } catch (error) {
      toast.error("Произошла ошибка при проверке данных");
      return { success: false, message: "Произошла ошибка при проверке данных" };
    }
  };

  return (
    <>
      <div className="login__wrapper">
        <form onSubmit={handleSubmit} className="login">
          <p className="login__welcome">Добро пожаловать</p>
          <div className="login__login-wrap">
            <p className="login__autorization">Авторизация</p>
            <div className="">
                <p className="login__login-p">Нету аккаунта?</p>
                <Link className="login__login-a" to="/register">Зарегистрируйтесь</Link>
            </div>
          </div>
          <p className="login__email-p">Введите свой Email</p>
          <input
            className="login__email-inp"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="login__password-p">Введите пароль</p>
          <input
            className="login__password-inp"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__button" type="submit" id="submit" name="submit">
            Войти
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginForm;