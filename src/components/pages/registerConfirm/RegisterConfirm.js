import React from 'react';
import { Link } from 'react-router-dom';
import classes from './RegisterConfirm.module.css';

const RegisterConformPage = () => (
  <div className={classes.page}>
    <div className={classes.component}>
      <h1 className={classes.heading}>
        Мы практически создали ваш аккаунт
      </h1>
      <p className={classes.description}>
        Чтобы подтвердить создание аккаунта, перейдите по ссылке, которую мы отправили на ваш E-mail
      </p>
      <Link to="/" className={classes.link}>
        Перейти на главную
      </Link>
    </div>
  </div>
);

export default RegisterConformPage;
