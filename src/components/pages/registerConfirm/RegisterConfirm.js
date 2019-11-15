import React from 'react';
import { Link } from 'react-router-dom';
import pageClasses from '../../../styles/Page.module.css';
import formClasses from '../../../styles/Form.module.css';

const RegisterConformPage = () => (
  <div className={pageClasses.container}>
    <div className={formClasses.component}>
      <h1 className={formClasses.heading}>
        Мы практически создали ваш аккаунт
      </h1>
      <p className={formClasses.description}>
        Чтобы подтвердить создание аккаунта, перейдите по ссылке, которую мы отправили на ваш E-mail
      </p>
      <Link to="/login/" className={formClasses.link}>
        Войти в аккаунт
      </Link>
    </div>
  </div>
);

export default RegisterConformPage;
