import React from 'react';

import Box from '@livipdev/core/Box';
import Carousel from '@livipdev/core/Carousel';
import Container from '@livipdev/core/Container';
import Grid from '@livipdev/core/Grid';
import Title from '@livipdev/core/Title';

import projects from './mockedAPI';
import ProjectCard from '../../components/ProjectCard';
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
        <Carousel
          centered
          infinite
          responsive
          slidesPerPage={4}
        >
          {
            projects.map((project) => (
              <ProjectCard {...project} />
            ))
          }
        </Carousel>
        <Grid container spacing={2} justify="space-around">
        </Grid>
      </Container>
    </Box>
  );
};

export default LastProjects;
