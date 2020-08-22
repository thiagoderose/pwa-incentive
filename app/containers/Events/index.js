import React from 'react';
import EmptySpace from '@livipdev/core/EmptySpace';

import Layout from '../Layout';
import EventsWithCategoryTitle from '../../components/EventsWithCategoryTitle';

import { response } from '../../api/nextEvents';

const Events = () => (
  <Layout topGutter={150}>
    <EventsWithCategoryTitle
      category='Próximos eventos'
      events={response}
      variant='project'
    />
    <EmptySpace height={150} />
  </Layout>
);

export default Events;
