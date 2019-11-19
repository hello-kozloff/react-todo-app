import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '..';

import classes from './TaskCard.module.css';

const TaskCard = (props) => {
  const {
    name,
  } = props;

  return (
    <div className={classes.component}>
      <h3 className={classes.heading}>
        {name}
      </h3>
      <div className={classes.actions}>
        <div className={classes.action}>
          <Button
            type="button"
            theme="primary"
            size="small"
          >
            Закончить задачу
          </Button>
        </div>
        <div className={classes.action}>
          <Button
            type="button"
            theme="secondary"
            size="small"
          >
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TaskCard;
