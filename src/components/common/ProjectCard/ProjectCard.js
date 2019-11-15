import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Button } from '..';

import classes from './ProjectCard.module.css';

function createProjectRouteBySlug(slug) {
  return `/project/${slug}/`;
}

function getFormatName(name) {
  const MAX_NAME_LENGTH = 30 - 3;
  let validName = '';

  if (name.length >= MAX_NAME_LENGTH) {
    validName = `${name.slice(0, MAX_NAME_LENGTH)}...`;
  } else {
    validName = name;
  }

  return validName;
}

const ProjectCard = (props) => {
  const {
    slug,
    name,
    thumbnailUrl,
  } = props;

  return (
    <Link
      to={createProjectRouteBySlug(slug)}
      className={classes.component}
    >
      {
        thumbnailUrl ? (
          <div
            className={classes.thumbnail}
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
        ) : (
          <div className={classes.thumbnail}>
            {name[0]}
          </div>
        )
      }
      <span className={classes.name}>
        {getFormatName(name)}
      </span>
      <Button theme="secondary" size="small">
        Открыть проект
      </Button>
    </Link>
  );
};

ProjectCard.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string,
};

ProjectCard.defaultProps = {
  thumbnailUrl: '',
};

export default ProjectCard;
