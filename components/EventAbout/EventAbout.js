import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Box from '@livipdev/core/Box';
import Button from '@livipdev/core/Button';
import Typography from '@livipdev/core/Typography';
import Grid from '@livipdev/core/Grid';

import GridWithBackground from './GridWithBackground';
import Section from '../Section';

const EventAbout = ({ event, messages }) => (
  <Section noGutter noContainer>
    <Grid container justify="center">
      <Grid item xs={12} md={10} lg={6}>
        <Section component="div" textAlign="center">
          <Typography variant="h2" message={messages.event} gutterBottom />
          <Typography variant="subtitle1" color="textSecondary">
            {event.short_description}
          </Typography>
        </Section>
      </Grid>
    </Grid>
    <Box component="div" bgcolor="grey.background">
      <Grid container>
        <Box component={Grid} item lg={6} p="10vw">
          <Typography variant="h2" gutterBottom>
            {event.about.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            <div dangerouslySetInnerHTML={{ __html: event.about.description }} />
          </Typography>
          <Button variant="contained" color="primary">
            <FormattedMessage {...messages.button} />
          </Button>
        </Box>
        <GridWithBackground item lg={6} background={event.about.cover_url} />
      </Grid>
    </Box>
  </Section>
);

EventAbout.propTypes = {
  event: PropTypes.shape({
    short_description: PropTypes.string,
    about: PropTypes.object,
  }),
  messages: PropTypes.object,
};

export default EventAbout;
