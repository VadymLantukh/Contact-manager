import { NavLink } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.boxNotFound}>
      <p className={css.textNotFound}>
        Sorry not found page 🥺
        <br />
        Error 404
      </p>

      <NavLink className={css.linkGoBack} to={'/'}>
        Go Home 🚩
      </NavLink>
    </div>
  );
};

export default NotFound;
