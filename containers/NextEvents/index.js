import React from 'react';
import EventFilteredList from '@livip/containers/EventFilteredList';
import Container from '@livip/core/Container';
import Title from '@livip/core/Title';

import HomeNextEventsButtons from '../../components/HomeNextEventsButtons';

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
      <EventFilteredList
        events={response}
        selectorName={NEXT_EVENTS}
      />
      <HomeNextEventsButtons />
    </Container>
    );
};

export default NextEvents;
