import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ isLoggedIn }: { isLoggedIn: boolean }) {
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}