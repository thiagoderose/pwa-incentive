import React from 'react';
import Container from '@livipdev/core/Container';

import EventsWithCategoryTitle from '../../components/EventsWithCategoryTitle';
import { selectAvailableCategories } from './selectors';
import { buildCategoryEvents } from './builders';
import propTypes from './propTypes';

const EventsGroupedByCategory = ({ events }) => {
  const categories = selectAvailableCategories(events);

  return (
    <Container>
      <EventsWithCategoryTitle events={events} />
      {
        categories.map((category) => (
          <EventsWithCategoryTitle
            category={category}
            events={buildCategoryEvents(events, category)}
          />
        ))
      }
    </Container>
  );
};

EventsGroupedByCategory.propTypes = propTypes;

export default EventsGroupedByCategory;
