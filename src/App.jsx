import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './screens/header.jsx';
import Footer from './screens/footer.jsx';

import HomePage from './screens/home.jsx';
import ContactPage from './screens/contacts.jsx';
import LoginPage from './screens/login.jsx';
import RegisterPage from './screens/register.jsx';
import ProfilePage from './screens/profile.jsx';
import RoutesPage from './screens/routes.jsx';
import '../public/css/style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/main" />} />
        <Route path='/main' element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/routes' element={<RoutesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
