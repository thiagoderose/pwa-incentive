import React from 'react';
import PropTypes from 'prop-types';

import Carousel from '@livipdev/core/Carousel';
import Typography from '@livipdev/core/Typography';
import Grid from '@livipdev/core/Grid';
import SimpleCardList from '@livipdev/core/SimpleCardList';
import Box from '@livipdev/core/Box';

import ExperienceCard from './ExperienceCard';
import Section from '../Section';

import { buildBestAttractions } from './builders';

const EventAttractions = ({ event, messages }) => {
  const bestAttractions = buildBestAttractions(event.attractions.best);

  return(
    <Section noGutter noContainer>
      <Grid container justify="center">
        <Grid item xs={12} md={10} lg={8}>
          <Section component="div" textAlign="center">
            <Box pb={3}>
              <Typography variant="h2" message={messages.attractions} gutterBottom />
            </Box>
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

      <Section textAlign="center">
        <Typography variant="h2" message={{ ...messages.nearby, values: { city: event.city } }} />
      </Section>

      <Section noGutter>
        <SimpleCardList contents={bestAttractions} italicDescription />
      </Section>
    </Section>
  );
};

EventAttractions.propTypes = {
  event: PropTypes.shape({
    attractions: PropTypes.object,
  }),
  messages: PropTypes.object,
};

export default EventAttractions;
