import React from 'react';
import classes from './Authorization.module.css';

import AuthorizationForm from '../../forms/authorization/index';

const AuthorizationPage = () => (
  <div className={classes.page}>
    <AuthorizationForm />
  </div>
);

export default AuthorizationPage;
