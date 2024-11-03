import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ContactUs from './pages/contactUs/ContactUs';
import DayPage from './pages/dayPage/DayPage';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { AuthProvider } from './providers/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day/:date" element={<DayPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
