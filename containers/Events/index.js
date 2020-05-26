import React from 'react';

import Layout from '../Layout';
import EventsGroupedByCategory from '../EventsGroupedByCategory';

import { response } from './mockedAPI';

const Events = () => (
  <Layout topGutter={150}>
    <EventsGroupedByCategory events={response} />
  </Layout>
);

export default Events;
