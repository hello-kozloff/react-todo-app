import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { Input, Button } from '../../common';

import formClasses from '../../../styles/Form.module.css';
import recoveryClasses from './Recovery.module.css';

class RecoveryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      payload: '',
      payloadError: '',
    };
  }

  /**
   * This function active when submit form
   * @param event
   */
  onSubmit = (event) => {
    event.preventDefault();

    const { payload } = this.state;

    if (!payload) {
      this.setState({
        payloadError: 'Введите в поле логин или e-mail',
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
      payload,
      payloadError,
    } = this.state;

    return (
      <form
        className={formClasses.component}
        onSubmit={this.onSubmit}
      >
        <div className={formClasses.row}>
          <h1 className={classNames(
            formClasses.heading,
            recoveryClasses.heading,
          )}
          >
            Восстановление доступа
          </h1>
          <p className={formClasses.description}>
            Вы можете восстановить пароль, если помните логин или e-mail
          </p>
        </div>
        <div className={formClasses.row}>
          <Input
            type="text"
            name="payload"
            theme="outline"
            size="medium"
            placeholder="Введите логин или e-mail"
            // required
            value={payload}
            error={payloadError}
            onChange={(event) => this.onChange('payload', event)}
          />
        </div>
        <div className={formClasses.row}>
          <Button
            type="submit"
            theme="primary"
            size="medium"
            wide
          >
            Далее
          </Button>
        </div>
        <div className={formClasses.row}>
          <span className={formClasses.or}>
            Вспомнили пароль?
          </span>
          <Link to="/login" className={formClasses.link}>
            Войти в аккаунт
          </Link>
        </div>
      </form>
    );
  }
}

export default RecoveryForm;
