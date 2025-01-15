import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import HomePage from './components/screens/home/home.jsx';
import ContactPage from './components/screens/contact/contact.jsx';
import LoginForm from './components/header/auth/authorization/forms/loginForm.jsx';
import RegisterForm from './components/header/auth/authorization/forms/registerForm.jsx';
import '../public/css/style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/main" />} />
        <Route path='/main' element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;