import React from 'react';
import PropTypes from 'prop-types';

import Title from '@livipdev/core/Title';
import EventList from '@livipdev/core/EventList';
import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

import Section from '../Section';

const EventMoreEvents = ({ event, messages }) => (
  <Section bgcolor="grey.background">
    <Title
      title={{
        variant: 'h2',
        message: messages.otherEvents,
      }}
      subtitle={{
        variant: 'subtitle1',
        message: messages.otherEventsSubtitle,
      }}
      maxWidth={SCREEN_SIZES.SMALL}
      align="center"
    />
    <EventList events={event.other.events} />
  </Section>
);

EventMoreEvents.propTypes = {
  event: PropTypes.shape({
    other: PropTypes.object,
  }),
  messages: PropTypes.object,
};

export default EventMoreEvents;
