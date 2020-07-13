import React from 'react';

import event from './mockedAPI.json';
import messages from './messages';
import Layout from '../Layout';
import EventHighlight from '../../components/EventHighlight';
import EventAbout from '../../components/EventAbout';
import EventAttractions from '../../components/EventAttractions';
import EventNearby from '../../components/EventNearby';
import EventMoreEvents from '../../components/EventMoreEvents';
import EventServicesIncluded from '../../components/EventServicesIncluded';

const Event = () => (
  <Layout>
    <EventHighlight
      title={event.name}
      description={messages.banner}
      background={event.cover_url}
    />
    <EventAbout event={event} messages={messages} />
    <EventAttractions event={event} messages={messages} />
    <EventNearby event={event} messages={messages} />
    <EventServicesIncluded />
    <EventMoreEvents event={event} message={messages} />
  </Layout>
);

export default Event;
