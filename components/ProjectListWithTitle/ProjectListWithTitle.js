import React from 'react';
import Container from '@livipdev/core/Container';
import Title from '@livipdev/core/Title';
import ProjectList from '@livipdev/core/ProjectList';

import messages from './messages';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const ProjectListWithTitle = ({ classes, projects, ...props }) => {
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
        {...props}
        projects={projects}
        customClass={classes.list}
      />
    </Container>
  );
};

ProjectListWithTitle.propTypes = propTypes;
ProjectListWithTitle.defaultProps = defaultProps;

export default ProjectListWithTitle;
