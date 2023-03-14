import { Navigate, Route } from 'react-router-dom';

function PublicRoute({ path, element, isLoggedIn}: { path: string, element: React.ReactNode, isLoggedIn: boolean }) {
  return <Route path={path} element={element} />;
}

export default PublicRoute;