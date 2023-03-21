import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { SlLogout } from 'react-icons/sl';
import { Context } from '../../context';
import { LOCAL_KEY } from 'constants';

import './Home.scss';

const Home = () => {
  const { setIsAuth } = useContext(Context);

  const logOut = () => {
    localStorage.removeItem(LOCAL_KEY.value);
    setIsAuth(null);
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <NavLink className="header__navlink" to="/">
            main
          </NavLink>
          <NavLink className="header__navlink" to="/users">
            users
          </NavLink>
          <NavLink className="header__navlink" to="/posts">
            posts
          </NavLink>
        </nav>
        <button type="button" className="header__btn" onClick={logOut}>
          <SlLogout size="40" />
        </button>
      </header>
      <Outlet />
    </>
  );
};

export default Home;
