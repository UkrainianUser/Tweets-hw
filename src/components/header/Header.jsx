import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
      </div>
    </header>
  );
};

export default Header;
