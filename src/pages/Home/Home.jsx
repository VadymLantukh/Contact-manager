import css from './Home.module.css'

const Home = () => {
  return (
    <div className={css.boxHome}>
      <h2 className={css.titleHome}>🥰 Welcome to Contacts Manager ☎️</h2>
      <p className={css.textHome}>This is a simple application to manage your contacts</p>
    </div>
  );
};

export default Home;
