import { useState, useEffect } from 'react';

export default function UserManager () {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userCookie = document.cookie.split('; ').find(row => row.startsWith('user='));
    if (userCookie) {
      setUser(JSON.parse(userCookie.split('=')[1]));
    }
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <a href="/profile" id="profile-link">Профиль</a>
        </div>
      ) : (
        <div>
          <a href="/login" id="login-link">Войти</a>
        </div>
      )}
    </div>
  );
};