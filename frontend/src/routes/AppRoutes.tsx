import { Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';

const AppRoutes = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/singup" element={<SignUp />} />
    </Routes >
  );
};

export default AppRoutes;