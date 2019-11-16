import React from 'react';
import PropTypes from 'prop-types';

import pageClasses from '../../../styles/Page.module.css';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    // eslint-disable-next-line no-console
    console.log(params.slug);
  }

  render() {
    return (
      <div className={pageClasses.container}>
        Hello world
      </div>
    );
  }
}

ProjectPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProjectPage;
