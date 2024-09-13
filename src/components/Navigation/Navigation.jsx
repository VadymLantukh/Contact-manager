import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
