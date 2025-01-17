import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Authorization() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        const userData = document.cookie.split('; ').find(row => row.startsWith('user='));
        if (userData) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    const handleLogout = (event) => {
        event.preventDefault();
        document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = 'updatedName=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        setIsAuthenticated(false);
        toast.success('Вы вышли из аккаунта');
        setTimeout(() => {
            window.location = '/main';
        }, 2000);
    };

    return (
        <div className="header__button">
            {isAuthenticated ? (
                <>
                    <Link to="/profile">Профиль</Link>
                    <a href="#" onClick={handleLogout}>Выйти</a>
                </>
            ) : (
                <Link to='/login'>Авторизация</Link>
            )}
        </div>
    );
}