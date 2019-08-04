import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import i18n from '../../locales/i18n';
import style from './style.module.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = ({ siteTitle }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className={style.main}>
      <div className={style.container}>
        <div className={style.heading}>
          <div className={style.logo}>
            <Logo />
            <h1>{siteTitle}</h1>
          </div>
          <div className={style.locales}>
            <Link to="/" onClick={() => changeLanguage('ru')}>RU</Link>
            <Link to="/en" onClick={() => changeLanguage('en')}>EN</Link>
            <Link to="/by" onClick={() => changeLanguage('by')}>BY</Link>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Architects of Belarus',
};

export default Header;
