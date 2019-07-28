import { Link } from 'gatsby';
import React from 'react';
import style from './style.module.css';

const Nav = () => (
  <div className={style.main}>
    <div className={style.container}>
      <Link to="/">
        MAIN
      </Link>
      <Link to="/search">
        TO THE LIST OF ARCHITECTS
      </Link>
      <Link to="/team">
        TEAM
      </Link>
    </div>
  </div>
);

export default Nav;
