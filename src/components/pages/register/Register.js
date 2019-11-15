import React from 'react';
import classes from '../../../styles/Page.module.css';

import { RegisterForm } from '../../forms';

const RegisterPage = () => (
  <div className={classes.container}>
    <RegisterForm />
  </div>
);

export default RegisterPage;
