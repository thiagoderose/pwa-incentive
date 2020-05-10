import React from 'react';

import Box from '@livip/core/Box';
import Container from '@livip/core/Container';
import Grid from '@livip/core/Grid';
import Title from '@livip/core/Title';

import projects from './mockedAPI';
import ProjectCard from '../../components/ProjectCard';
import messages from './messages';

const LastProjects = () => {
  const title = {
    variant: 'h2',
    message: messages.title,
  };

  return (
    <Box bgcolor="grey.lighter">
      <Container>
        <Title
          title={title}
          align="center"
        />
        <Grid container justify="space-around">
          {
            projects.map((project) => (
              <Box component={Grid} item mb={3}>
                <ProjectCard {...project} />
              </Box>
            ))
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default LastProjects;
