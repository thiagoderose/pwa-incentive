import React from 'react';
import PropTypes from 'prop-types';

import EventList from '@livipdev/core/EventList';
import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';
import Box from '@livipdev/core/Box';
import Typography from '@livipdev/core/Typography';

import Section from '../Section';

const EventMoreEvents = ({ event, messages }) => (
  <Section bgcolor="grey.background" textAlign="center" gutterY={15}>
    <Box pb={1}>
      <Typography variant="h2" message={messages.otherEvents} gutterBottom />
    </Box>

    <Box maxWidth={500} mx='auto'>
      <Typography variant="subtitle1" message={messages.otherEventsSubtitle} color="textSecondary" />
    </Box>

    <Box py={3}>
      <EventList
        events={event.other.events}
        variant='project'
        columns={3}
      />
    </Box>
  </Section>
);

EventMoreEvents.propTypes = {
  event: PropTypes.shape({
    other: PropTypes.object,
  }),
  messages: PropTypes.object,
};

export default EventMoreEvents;
