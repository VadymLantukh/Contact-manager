import { Navigate } from 'react-router-dom';

import RegistarationForm from '../../components/RegistrationForm/RegistrationForm';
import DocumentTitle from '../../DocumentTitle';
import { useAuth } from '../../hooks/useAuth';

const Register = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <DocumentTitle>Register</DocumentTitle>
      <RegistarationForm />
    </div>
  );
};

export default Register;
