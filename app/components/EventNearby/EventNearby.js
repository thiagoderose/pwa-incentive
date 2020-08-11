import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@livipdev/core/Typography';
import EventList from '@livipdev/core/EventList';

import Section from '../Section';

const EventNearby = ({ event, messages }) => (
  <Section textAlign="center">
    <Typography variant="h2" gutterBottom message={{ ...messages.nearby, values: { city: event.city } }} />
    <EventList events={event.nearby.events} />
  </Section>
);

EventNearby.propTypes = {
  event: PropTypes.shape({
    nearby: PropTypes.object,
    city: PropTypes.string,
  }),
  messages: PropTypes.object,
};

export default EventNearby;
