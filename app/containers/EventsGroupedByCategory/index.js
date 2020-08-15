import React from 'react';
import Container from '@livipdev/core/Container';

import EventsWithCategoryTitle from '../../components/EventsWithCategoryTitle';
import { selectAvailableCategories } from './selectors';
import { buildCategoryEvents } from './builders';
import propTypes from './propTypes';

const EventsGroupedByCategory = ({ events, variant }) => {
  const categories = selectAvailableCategories(events);

  return (
    <Container>
      {
        categories.map((category) => (
          <EventsWithCategoryTitle
            category={category}
            events={buildCategoryEvents(events, category)}
            variant={variant}
          />
        ))
      }
    </Container>
  );
};

EventsGroupedByCategory.propTypes = propTypes;

export default EventsGroupedByCategory;
