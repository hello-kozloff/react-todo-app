import React from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '..';

import classes from './CreateTask.module.css';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);

    const { taskName } = this.props;

    this.state = {
      taskName,
      error: '',
    };
  }

  /**
   * This function active when submit form
   * @param event
   */
  onSubmit = (event) => {
    event.preventDefault();

    const { taskName } = this.state;
    const { onSubmit } = this.props;

    let valid = true;

    if (!taskName) {
      this.setState({
        error: 'Введите название задачи',
      });

      valid = false;
    } else {
      this.setState({ error: '' });
    }

    if (valid === true) {
      onSubmit(taskName);
    }
  };

  /**
   * This function active when change input
   * @param event
   */
  onChange = (event) => {
    const { value } = event.target;

    /**
     * Set new taskName value
     */
    this.setState({
      taskName: value,
    });
  };

  render() {
    const { taskName, error } = this.state;
    const { placeholder } = this.props;

    return (
      <form className={classes.component} onSubmit={this.onSubmit}>
        <h2 className={classes.heading}>
          Создать новую задачу:
        </h2>
        <div className={classes.container}>
          <div className={classes.field}>
            <Input
              type="text"
              name="taskName"
              placeholder={placeholder}
              value={taskName}
              error={error}
              onChange={this.onChange}
            />
          </div>
          <div className={classes.submit}>
            <Button type="submit" theme="primary">
              Создать
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

CreateTask.propTypes = {
  taskName: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
};

CreateTask.defaultProps = {
  taskName: '',
  placeholder: 'Введите название задачи',
  onSubmit: () => false,
};

export default CreateTask;
