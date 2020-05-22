import React from 'react';

import Layout from '../Layout';
import EventBlock from '../../components/EventBlock';

const Events = () => (
  <Layout topGutter={200}>
    <EventBlock />
    <EventBlock category="Formula 1" />
    <EventBlock category="Futebol" />
  </Layout>
);

export default Events;
