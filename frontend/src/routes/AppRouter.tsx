import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';
import NavbarLayout from '../layout/NavbarLayout';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<PrivateRoute />}>
        <Route element={<NavbarLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Route>
      <Route path={'/login'} element={<Login />} />
      <Route path={'/signup'} element={<SignUp />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};