import React from 'react';
import Container from '@livipdev/core/Container';
import Title from '@livipdev/core/Title';
import EventList from '@livipdev/core/EventList';
import flow from 'lodash/flow';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const EventsWithCategoryTitle = ({ category, events }) => {
  const title = {
    variant: 'h3',
    message: flow(toLower, startCase)(category),
  };

  return (
    <Container>
      <Title
        title={title}
        align="center"
      />
      <EventList
        events={events}
      />
    </Container>
  );
};

EventsWithCategoryTitle.propTypes = propTypes;
EventsWithCategoryTitle.defaultProps = defaultProps;

export default EventsWithCategoryTitle;
