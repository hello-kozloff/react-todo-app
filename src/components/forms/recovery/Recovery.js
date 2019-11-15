import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../../styles/Form.module.css';

import { Input, Button } from '../../common';

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
        className={classes.component}
        onSubmit={this.onSubmit}
      >
        <div className={classes.row}>
          <h1 className={classes.heading}>
            Восстановление доступа
          </h1>
          <p className={classes.description}>
            Вы можете восстановить пароль, если помните логин или e-mail
          </p>
        </div>
        <div className={classes.row}>
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
        <div className={classes.row}>
          <Button
            type="submit"
            theme="primary"
            size="medium"
            wide
          >
            Далее
          </Button>
        </div>
        <div className={classes.row}>
          <span className={classes.or}>
            Вспомнили пароль?
          </span>
          <Link to="/login" className={classes.link}>
            Войти в аккаунт
          </Link>
        </div>
      </form>
    );
  }
}

export default RecoveryForm;
