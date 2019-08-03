import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import style from './style.module.css';
import github from '../../images/github.png';

const Footer = () => (
  <footer className={style.main}>
    <div className={style.container}>
      <p className={style.copyright}>
        Rolling Scopes School, 2019
      </p>
    </div>

    <IconButton href="https://github.com/MatveyKorbut/Culture-portal">
      <img alt="github" width="20" src={github} />
    </IconButton>
  </footer>
);

export default Footer;
