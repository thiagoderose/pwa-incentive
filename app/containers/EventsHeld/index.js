import React from 'react';
import EmptySpace from '@livipdev/core/EmptySpace';

import Layout from '../Layout';
import EventsWithCategoryTitle from '../../components/EventsWithCategoryTitle';

import { response } from './mockedAPI';

const Events = () => (
  <Layout topGutter={150}>
    <EventsWithCategoryTitle
      category='Eventos Realizados'
      events={response}
      variant='held'
    />
    <EmptySpace height={150} />
  </Layout>
);

export default Events;
