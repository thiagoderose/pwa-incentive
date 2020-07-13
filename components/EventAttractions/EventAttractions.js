import React from 'react';
import PropTypes from 'prop-types';

import Carousel from '@livipdev/core/Carousel';
import Typography from '@livipdev/core/Typography';
import Grid from '@livipdev/core/Grid';

import ExperienceCard from './ExperienceCard';
import Section from '../Section';

const EventAttractions = ({ event, messages }) => (
  <Section noGutter noContainer>
    <Grid container justify="center">
      <Grid item xs={12} md={10} lg={8}>
        <Section component="div" textAlign="center">
          <Typography variant="h2" message={messages.attractions} gutterBottom />
          <Typography variant="subtitle1" color="textSecondary">
            {event.attractions.description}
          </Typography>
        </Section>
      </Grid>
    </Grid>
    <Carousel
      infinite
      responsive
      slidesPerPage={3}
      breakpoints={{
        599: {
          slidesPerPage: 1,
        },
        960: {
          slidesPerPage: 2,
        },
      }}
    >
      {
        event.attractions.suggested.map((suggestion) => (
          <ExperienceCard background={suggestion.cover_url}>
            <div>
              <Typography variant="subtitle2">{suggestion.name}</Typography>
              <Typography variant="body1">{suggestion.description}</Typography>
            </div>
          </ExperienceCard>
        ))
      }
    </Carousel>
  </Section>
);

EventAttractions.propTypes = {
  event: PropTypes.shape({
    attractions: PropTypes.object,
  }),
  messages: PropTypes.object,
};

export default EventAttractions;
