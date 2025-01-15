import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import HomePage from './components/screens/home/home.jsx';
import ContactPage from './components/screens/contact/contact.jsx';
import '../public/css/style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;