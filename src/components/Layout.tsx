import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/super-heroes">SuperHeroes</NavLink>
          </li>
          <li>
            <NavLink to="/rq-super-heroes">RQSuperHeroes</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
