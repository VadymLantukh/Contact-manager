import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.boxHome}>
      <h2 className={css.titleHome}>🥰 Welcome to Contacts Manager ☎️</h2>
      <p className={css.textHome}>
        This is a simple application for managing contacts,
        <br /> here you can add, delete, save your favorite contacts locally.
      </p>
      <p className={css.textNavigate}>
        Just
        <NavLink className={css.linkHome} to={'/register'}>
          Сlick
        </NavLink>
        to register ar log in and lets go!
      </p>
    </div>
  );
};

export default Home;
