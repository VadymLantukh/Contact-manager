import { Navigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import DocumentTitle from '../../DocumentTitle';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </div>
  );
};

export default Login;
