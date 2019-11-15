import React from 'react';
import classes from '../../../styles/Page.module.css';

import { AuthorizationForm } from '../../forms';

const AuthorizationPage = () => (
  <div className={classes.container}>
    <AuthorizationForm />
  </div>
);

export default AuthorizationPage;
