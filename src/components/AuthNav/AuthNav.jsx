import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.boxAuthNav}>
      <NavLink className={css.AuthNavLink} to="register">
        Register
      </NavLink>
      <NavLink className={css.AuthNavLink} to="login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
