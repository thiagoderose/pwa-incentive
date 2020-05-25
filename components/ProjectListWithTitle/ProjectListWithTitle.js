import React from 'react';
import Container from '@livipdev/core/Container';
import Title from '@livipdev/core/Title';

import ProjectList from '../ProjectList';
import messages from './messages';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const ProjectListWithTitle = ({ classes, projects }) => {
  const title = {
    variant: 'h3',
    message: messages.title,
  };

  return (
    <Container>
      <Title
        title={title}
        align="center"
        customClass={classes.title}
      />
      <ProjectList
        projects={projects}
        customClass={classes.list}
      />
    </Container>
  );
};

ProjectListWithTitle.propTypes = propTypes;
ProjectListWithTitle.defaultProps = defaultProps;

export default ProjectListWithTitle;
