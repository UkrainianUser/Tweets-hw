import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <ul className={css.linkList}>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tweets">Tweets</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
