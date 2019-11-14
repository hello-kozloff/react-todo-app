import React from 'react';
import classes from './Authorization.module.css';

import { AuthorizationForm } from '../../forms';

const AuthorizationPage = () => (
  <div className={classes.page}>
    <AuthorizationForm />
  </div>
);

export default AuthorizationPage;
