import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from '@livipdev/core/Button';
import Typography from '@livipdev/core/Typography';
import Box from '@livipdev/core/Box';
import Grid from '@livipdev/core/Grid';

import GridWithBackground from './GridWithBackground';
import Section from '../Section';

const EventAbout = ({ event, messages }) => (
  <Section noGutter noContainer>
    <Section component="div" textAlign="center">
      <Typography variant="h2" message={messages.event} gutterBottom />
      <Typography variant="subtitle1" color="textSecondary">
        {event.short_description}
      </Typography>
    </Section>
    <Section component="div" bgcolor="grey.background" noGutter>
      <Box component={GridWithBackground} py={7} container background={event.about.cover_url}>
        <Grid item lg={6}>
          <Typography variant="h2" gutterBottom>
            {event.about.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            <div dangerouslySetInnerHTML={{ __html: event.about.description }} />
          </Typography>
          <Button variant="contained" color="primary">
            <FormattedMessage {...messages.button} />
          </Button>
        </Grid>
      </Box>
    </Section>
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
