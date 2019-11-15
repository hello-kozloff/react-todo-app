import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '..';

import classes from './TasksContainer.module.css';

class TasksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={classes.component}>
        <header className={classes.header}>
          <div className={classes.information}>
            <h1 className={classes.heading}>
              project
            </h1>
          </div>
          <div className={classes.actions}>
            <div className={classes.action}>
              <Button
                type="button"
                theme="primary"
                size="small"
              >
                Добавить задачу
              </Button>
            </div>
            <div className={classes.action}>
              <Link to="/projects/">
                <Button
                  type="button"
                  theme="secondary"
                  size="small"
                >
                  Назад
                </Button>
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default TasksContainer;
