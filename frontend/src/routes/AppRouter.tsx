import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Routes>
      <Route path='/' element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path={'/login'} element={<Login />} />
      <Route path={'/signup'} element={<SignUp />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};