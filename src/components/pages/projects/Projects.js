import React from 'react';
import classes from './Projects.module.css';

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={classes.page}>
        hello world
      </div>
    );
  }
}

export default ProjectsPage;
