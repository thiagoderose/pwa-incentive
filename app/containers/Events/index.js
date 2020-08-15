import React from 'react';
import EmptySpace from '@livipdev/core/EmptySpace';

import Layout from '../Layout';
import EventsGroupedByCategory from '../EventsGroupedByCategory';

import { response } from './mockedAPI';

const Events = () => (
  <Layout topGutter={180}>
    <EventsGroupedByCategory events={response} />
    <EmptySpace height={150} />
  </Layout>
);

export default Events;
