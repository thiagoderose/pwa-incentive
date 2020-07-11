import React from 'react';

import Box from '@livipdev/core/Box';
import Container from '@livipdev/core/Container';
import Title from '@livipdev/core/Title';

import projects from './mockedAPI';
import ProjectList from '../../components/ProjectList';
import messages from './messages';

const LastProjects = () => {
  const title = {
    variant: 'h2',
    message: messages.title,
  };

  return (
    <Box bgcolor="grey.background" py={7}>
      <Container>
        <Title
          title={title}
          align="center"
        />
        <ProjectList projects={projects} columns={2} />
      </Container>
    </Box>
  );
};

export default LastProjects;
