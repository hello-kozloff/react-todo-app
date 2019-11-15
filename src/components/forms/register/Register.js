import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import classes from '../../../styles/Form.module.css';

import { Input, Button } from '../../common';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: '',
      login: '',
      loginError: '',
      password: '',
      passwordError: '',
      repeatedPassword: '',
      repeatedPasswordError: '',
      redirect: false,
    };
  }

  /**
   * This function active when submit form
   * @param event
   */
  onSubmit = (event) => {
    event.preventDefault();

    let valid = true;

    const {
      email,
      login,
      password,
      repeatedPassword,
    } = this.state;

    if (!email) {
      this.setState({
        emailError: 'Введите в поле Email',
      });

      valid = false;
    } else {
      this.setState({ emailError: '' });
    }

    if (!login) {
      this.setState({
        loginError: 'Введите в поле Логин',
      });

      valid = false;
    } else {
      this.setState({ loginError: '' });
    }

    if (!password) {
      this.setState({
        passwordError: 'Введите в поле Пароль',
      });

      valid = false;
    } else {
      this.setState({ passwordError: '' });
    }

    if (!repeatedPassword) {
      this.setState({
        repeatedPasswordError: 'Введите в поле Повторите пароль',
      });

      valid = false;
    } else {
      this.setState({ repeatedPasswordError: '' });
    }

    if (password !== repeatedPassword) {
      this.setState({
        passwordError: 'Введенные пароли не совпадают',
        repeatedPasswordError: 'Введенные пароли не совпадают',
      });

      valid = false;
    } else {
      this.setState({ repeatedPasswordError: '' });
    }

    if (valid === true) {
      this.setState({
        redirect: true,
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
      login,
      loginError,
      password,
      passwordError,
      repeatedPassword,
      repeatedPasswordError,
      redirect,
    } = this.state;

    if (redirect) {
      return <Redirect to="/register/confirm" />;
    }

    return (
      <form
        className={classes.component}
        onSubmit={this.onSubmit}
      >
        <div className={classes.row}>
          <h1 className={classes.heading}>
            Зарегистрируйтесь в
            <br />
            Todo Application
          </h1>
          <p className={classes.description}>
            Вам нужно всего лишь заполнить несколько простых полей
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
            type="text"
            name="login"
            theme="outline"
            size="medium"
            placeholder="Логин"
            // required
            value={login}
            error={loginError}
            onChange={(event) => this.onChange('login', event)}
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
          <Input
            type="password"
            name="password"
            theme="outline"
            size="medium"
            placeholder="Повтортие пароль"
            // required
            value={repeatedPassword}
            error={repeatedPasswordError}
            onChange={(event) => this.onChange('repeatedPassword', event)}
          />
        </div>
        <div className={classes.row}>
          <Button
            type="submit"
            theme="primary"
            size="medium"
            wide
          >
            Зарегистрироваться
          </Button>
        </div>
        <div className={classes.row}>
          <span className={classes.or}>
            Уже зарегистрированы?
          </span>
          <Link to="/login" className={classes.link}>
            Войти в аккаунт
          </Link>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
