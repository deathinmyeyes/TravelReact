import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        loadUser();
        displaySearchHistory();
    }, []);

    const loadUser = () => {
        const userData = getCookie('user');
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
        } else {
            toast.error('Вы не авторизованы');
            setTimeout(() => {
                window.location = '/login';
            }, 2000);
        }
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    };

    const displaySearchHistory = () => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(history);
    };

    const handlePasswordChange = async (event) => {
        event.preventDefault();

        const newPassword = event.target.elements.newPassword.value;
        const confirmNewPassword = event.target.elements.confirmNewPassword.value;

        if (newPassword !== confirmNewPassword) {
            toast.error('Пароли не совпадают');
            return;
        }

        if (newPassword.length < 8 || confirmNewPassword.length < 8) {
            toast.error('Слишком короткий пароль');
            return;
        }

        try {
            const response = await fetch(`https://6752c922f3754fcea7b99892.mockapi.io/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: newPassword }),
            });

            if (response.ok) {
                toast.success('Пароль успешно изменен');
                event.target.reset();
            } else {
                toast.error('Ошибка при смене пароля');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            toast.error('Произошла ошибка при смене пароля');
        }
    };

    const handleNameChange = async (event) => {
        event.preventDefault();

        const newName = event.target.elements.newName.value;

        if (!newName) {
            toast.error('Имя не может быть пустым');
            return;
        }

        try {
            const response = await fetch(`https://6752c922f3754fcea7b99892.mockapi.io/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newName }),
            });

            if (response.ok) {
                toast.success('Имя успешно изменено');
                const updatedUser = { ...user, name: newName };
                setUser(updatedUser);
                setCookie('user', JSON.stringify(updatedUser), 1);
                event.target.reset();
            } else {
                toast.error('Ошибка при смене имени');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            toast.error('Произошла ошибка при смене имени');
        }
    };

    const handleLogout = (event) => {
        event.preventDefault();

        setCookie('user', '', -1);
        setCookie('updatedName', '', -1);

        toast.success('Вы вышли из аккаунта');
        setTimeout(() => {
            window.location = '/main';
        }, 2000);
    };

    const clearSearchHistory = () => {
        localStorage.removeItem('searchHistory');
        setSearchHistory([]);
        toast.success('История поиска очищена');
    };

    return (
        <section className="profile">
            <div className="container">
                <div className="profile__wrapper">
                    <h1>Личный кабинет</h1>
                    <div id="user-info">
                        <p><strong>Имя:</strong> <span id="user-name">{user?.name}</span></p>
                        <p><strong>Email:</strong> <span id="user-email">{user?.email}</span></p>
                    </div>
                    <h2>Вы смотрели</h2>
                    <ul id="search-history">
                        {searchHistory.length === 0 ? (
                            <li>История поиска пуста</li>
                        ) : (
                            searchHistory.map((item, index) => (
                                <li key={index}>
                                    Маршрут: {item.name} (id: {item.id}), Посещён: {new Date(item.timestamp).toLocaleString()}
                                </li>
                            ))
                        )}
                    </ul>
                    <button id="clear-history" onClick={clearSearchHistory}>Очистить историю</button>
                    <form id="change-name-form" onSubmit={handleNameChange}>
                        <h2>Сменить имя</h2>
                        <p>
                            <label htmlFor="new-name">Новое имя:</label>
                            <input type="text" id="new-name" name="newName" required />
                        </p>
                        <button type="submit">Сменить имя</button>
                    </form>
                    <form id="change-password-form" onSubmit={handlePasswordChange}>
                        <h2>Сменить пароль</h2>
                        <p>
                            <label htmlFor="new-password">Новый пароль:</label>
                            <input type="password" id="new-password" name="newPassword" required />
                        </p>
                        <p>
                            <label htmlFor="confirm-new-password">Подтвердите новый пароль:</label>
                            <input type="password" id="confirm-new-password" name="confirmNewPassword" required />
                        </p>
                        <button type="submit">Сменить пароль</button>
                    </form>
                    <a href="#" id="logout-link" onClick={handleLogout}>Выйти</a>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}