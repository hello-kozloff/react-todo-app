import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { Input, Button } from '../../common';

import pageClasses from './Authorization.module.css';
import formClasses from '../../../styles/Form.module.css';

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
    } else {
      this.setState({ emailError: '' });
    }

    if (!password) {
      this.setState({
        passwordError: 'Введите в поле Пароль',
      });
    } else {
      this.setState({ passwordError: '' });
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
        className={formClasses.component}
        onSubmit={this.onSubmit}
      >
        <div className={formClasses.row}>
          <h1 className={formClasses.heading}>
            Войдите
          </h1>
          <p className={classNames(
            formClasses.description,
            pageClasses.description,
          )}
          >
            Введите данные, которые вы вводили при регистрации
          </p>
        </div>
        <div className={formClasses.row}>
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
        <div className={formClasses.row}>
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
        <div className={formClasses.row}>
          <Button
            type="submit"
            theme="primary"
            size="medium"
            wide
          >
            Войти
          </Button>
        </div>
        <div className={formClasses.row}>
          <Link to="/recovery" className={formClasses.link}>
            Забыли свой пароль?
          </Link>
          <span className={formClasses.or}>
            Вы все еще не зарегистрированы?
          </span>
          <Link to="/register" className={formClasses.link}>
            Создать новый аккаунт
          </Link>
        </div>
      </form>
    );
  }
}

export default AuthorizationForm;
