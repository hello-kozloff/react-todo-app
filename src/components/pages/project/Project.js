import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Button, TaskCard, CreateTask } from '../../common';

import pageClasses from '../../../styles/Page.module.css';
import projectClasses from './Project.module.css';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Строительство моста',
      thumbnailUrl: 'https://images.unsplash.com/photo-1568475734433-6d2c050b5749?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
      tasks: [
        {
          name: 'Первая задача',
        },
        {
          name: 'Вторая задача',
        },
        {
          name: 'Третья задача',
        },
      ],
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    // eslint-disable-next-line no-console
    console.log(params.slug);
  }

  render() {
    const {
      name,
      thumbnailUrl,
      tasks,
    } = this.state;

    return (
      <div className={pageClasses.container}>
        <div className={projectClasses.component}>
          <header className={projectClasses.header}>
            {
              thumbnailUrl ? (
                <div
                  className={projectClasses.thumbnail}
                  style={{ backgroundImage: `url(${thumbnailUrl})` }}
                />
              ) : (
                <div className={projectClasses.thumbnail}>
                  {name[0]}
                </div>
              )
            }
            <h1 className={projectClasses.heading}>
              Название проекта
            </h1>
            <div className={projectClasses.actions}>
              <div className={projectClasses.action}>
                <Button
                  type="button"
                  theme="primary"
                  size="small"
                >
                  Редактировать проект
                </Button>
              </div>
              <div className={projectClasses.action}>
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
          {
            tasks ? (
              tasks.map((task) => (
                <div key={task.name} className={projectClasses.task}>
                  <TaskCard name={task.name} />
                </div>
              ))
            ) : null
          }
          <CreateTask />
        </div>
      </div>
    );
  }
}

ProjectPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProjectPage;
