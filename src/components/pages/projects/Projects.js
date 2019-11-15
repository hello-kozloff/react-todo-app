import React from 'react';

import { Button } from '../../common';

import pageClasses from '../../../styles/Page.module.css';
import projectsClasses from './Projects.module.css';

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  render() {
    const { projects } = this.state;

    const projectsTotal = projects.length;

    return (
      <div className={pageClasses.container}>
        <div className={projectsClasses.component}>
          <header className={projectsClasses.header}>
            <h1 className={projectsClasses.heading}>
              Все проекты(
              {projectsTotal}
              ):
            </h1>
            <div className={projectsClasses.actions}>
              <Button
                type="button"
                theme="primary"
                size="small"
              >
                Создать проект
              </Button>
            </div>
          </header>

          {
            projectsTotal === 0 ? (
              <div className={projectsClasses.empty}>
                Вы еще не создали ни одного проекта. Самое время это сделать!
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
