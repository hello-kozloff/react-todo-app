import React from 'react';
import classes from './Authorization.module.css';

import Authorization from '../../forms/authorization/index';

const AuthorizationPage = () => (
  <div className={classes.page}>
    <Authorization />
  </div>
);

export default AuthorizationPage;
