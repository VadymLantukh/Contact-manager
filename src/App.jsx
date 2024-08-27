import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { refreshUser } from './redux/auth/operations';
import NotFound from './components/NotFound/NotFound';
import PublicRoute from './components/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('./pages/Home/Home'));
const RegisterPage = lazy(() => import('./pages/Register/Register'));
const LoginPage = lazy(() => import('./pages/Login/Login'));
const ContactsPage = lazy(() => import('./pages/Contacts/Contacts'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Please wait refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
