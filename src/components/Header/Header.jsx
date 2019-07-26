import PropTypes from 'prop-types';
import React from 'react';
import style from './style.module.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = ({ siteTitle }) => (
  <header className={style.main}>
    <div className={style.heading}>
      <Logo />
      <h1>{siteTitle}</h1>
    </div>
    <Navigation />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Architects of Belarus',
};

export default Header;
