import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '../../common';

import classes from './Header.module.css';

const Header = () => (
  <header className={classes.component}>
    <div className={classes.container}>
      <Link to="/" className={classes.logo}>
        Todo Application
      </Link>
      <div className={classes.auth}>
        <Link tabIndex="-1" to="/login">
          <Button
            type="button"
            theme="primary"
            size="small"
          >
            Войти
          </Button>
        </Link>
        <Link tabIndex="-1" to="/register">
          <Button
            type="button"
            theme="secondary"
            size="small"
          >
            Регистрация
          </Button>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
