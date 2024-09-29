import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  const addActive = ({ isActive }) => (isActive ? css.active : css.inactive);

  return (
    <div className={css.boxAuthNav}>
      <NavLink className={addActive} to="register">
        Register
      </NavLink>
      <NavLink className={addActive} to="login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
