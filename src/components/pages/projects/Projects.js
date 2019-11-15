import React from 'react';

import { Button, ProjectCard } from '../../common';

import pageClasses from '../../../styles/Page.module.css';
import projectsClasses from './Projects.module.css';

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          slug: 'first-project',
          name: 'Мой первый проект',
          thumbnailUrl: 'https://images.unsplash.com/photo-1573805797307-d6975847411b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=100',
        },
        {
          slug: 'development-of-bridge',
          name: 'Очнь длинный заголовок проекта, который обязательно должен быть обрезан, сейчас мы это сделаем',
          thumbnailUrl: 'https://images.unsplash.com/photo-1568475734433-6d2c050b5749?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
        },
        {
          slug: 'tour-in-usa',
          name: 'Тур по Америке',
          thumbnailUrl: 'https://images.unsplash.com/photo-1568822602205-62ac63d1268f?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        },
        {
          slug: 'travel-dubai',
          name: 'Путешествие в Дубаи',
          thumbnailUrl: 'https://images.unsplash.com/photo-1568822577231-6e3456d0363e?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        },
      ],
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
            projectsTotal !== 0 ? (
              <div className={projectsClasses.projects}>
                {
                  projects.map((project) => (
                    <div key={project.slug} className={projectsClasses.project}>
                      <ProjectCard
                        slug={project.slug}
                        name={project.name}
                        thumbnailUrl={project.thumbnailUrl}
                      />
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className={projectsClasses.empty}>
                Вы еще не создали ни одного проекта. Самое время это сделать!
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
