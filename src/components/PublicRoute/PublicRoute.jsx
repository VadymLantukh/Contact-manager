import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth;
  const location = useLocation();

  return isLoggedIn ? (
    <Navigate to={location?.state ?? '/'} replace />
  ) : (
    children
  );
};

export default PublicRoute;
