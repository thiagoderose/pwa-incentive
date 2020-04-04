import React from 'react';
import EventList from '@livip/containers/EventList';
import Container from '@livip/core/Container';
import Title from '@livip/core/Title';

import messages from './messages';
import { response } from './mockedAPI';
import { NEXT_EVENTS } from './constants';

const NextEvents = () => {
  const title = {
    variant: 'h2',
    message: messages.title,
  };
  const subtitle = {
    variant: 'subtitle2',
    message: messages.subtitle,
  };

  return (
    <Container>
      <Title
        title={title}
        subtitle={subtitle}
        maxWidth='sm'
      />
      <EventList
        events={response}
        selectorName={NEXT_EVENTS}
      />
    </Container>
    );
};

export default NextEvents;
