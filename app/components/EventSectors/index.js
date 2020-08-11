import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@livipdev/core/Typography';

import Section from '../Section';
import Sectors from '../Sectors';

const EventSectors = ({ messages, event }) => (
  <Section noGutter noContainer>
    <Section component="div" textAlign="center">
      <Typography variant="h2" message={messages.sectors} gutterBottom />
    </Section>
    <Sectors sectors={event.sectors} />
  </Section>
);

EventSectors.propTypes = {
  event: PropTypes.shape({
    sectors: PropTypes.array,
  }),
  messages: PropTypes.object,
};

export default EventSectors;
