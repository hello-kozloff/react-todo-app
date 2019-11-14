import React from 'react';
import classes from './Register.module.css';

import { RegisterForm } from '../../forms';

const RegisterPage = () => (
  <div className={classes.page}>
    <RegisterForm />
  </div>
);

export default RegisterPage;
