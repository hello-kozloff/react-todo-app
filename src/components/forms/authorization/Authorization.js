import React from 'react';
import classes from './Authorization.module.css';

import { Input, Button } from '../../common';
import { Link } from 'react-router-dom';

class AuthorizationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
    };
  }

  /**
   * This function active when submit form
   * @param event
   */
  onSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    if (!email) {
      this.setState({
        emailError: 'Введите в поле Email',
      });
    }

    if (!password) {
      this.setState({
        passwordError: 'Введите в поле Пароль',
      });
    }
  };

  /**
   * This function active when change input value
   * @param variable
   * @param event
   */
  onChange = (variable, event) => {
    const { value } = event.target;

    /**
     * Set new value in variable
     */
    this.setState({
      [variable]: value,
    });
  };

  render() {
    const {
      email,
      emailError,
      password,
      passwordError,
    } = this.state;

    return (
      <form
        className={classes.component}
        onSubmit={this.onSubmit}
      >
        <div className={classes.row}>
          <h1 className={classes.heading}>
            Войдите
          </h1>
          <p className={classes.description}>
            Введите данные, которые вы вводили при регистрации
          </p>
        </div>
        <div className={classes.row}>
          <Input
            type="email"
            name="email"
            theme="outline"
            size="medium"
            placeholder="Email"
            // required
            value={email}
            error={emailError}
            onChange={(event) => this.onChange('email', event)}
          />
        </div>
        <div className={classes.row}>
          <Input
            type="password"
            name="password"
            theme="outline"
            size="medium"
            placeholder="Пароль"
            // required
            value={password}
            error={passwordError}
            onChange={(event) => this.onChange('password', event)}
          />
        </div>
        <div className={classes.row}>
          <Button
            type="submit"
            theme="primary"
            size="medium"
            wide
          >
            Войти
          </Button>
        </div>
        <div className={classes.row}>
          <Link to="/recovery" className={classes.link}>
            Забыли свой пароль?
          </Link>
          <span className={classes.or}>
            Вы все еще не зарегистрированы?
          </span>
          <Link to="/register" className={classes.link}>
            Создать новый аккаунт
          </Link>
        </div>
      </form>
    );
  }
}

export default AuthorizationForm;
