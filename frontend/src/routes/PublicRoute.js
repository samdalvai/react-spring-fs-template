import { Navigate, Route } from 'react-router-dom';

function PublicRoute({ isLoggedIn, ...props }) {
  return isLoggedIn ? <Navigate to="/" /> : <Route {...props} />;
}

export default PublicRoute;