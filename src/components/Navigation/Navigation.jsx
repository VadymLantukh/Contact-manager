import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const addActive = ({ isActive }) => (isActive ? css.active : css.inactive);

  return (
    <nav className={css.nav}>
      <NavLink className={addActive} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={addActive} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
