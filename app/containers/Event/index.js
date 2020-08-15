import React from 'react';

import event from './mockedAPI.json';
import messages from './messages';
import Layout from '../Layout';
import EventHighlight from '../../components/EventHighlight';
import EventAbout from '../../components/EventAbout';
import EventAttractions from '../../components/EventAttractions';
import EventMoreEvents from '../../components/EventMoreEvents';
import EventServicesIncluded from '../../components/EventServicesIncluded';
import EventSectors from '../../components/EventSectors';

const Event = () => (
  <Layout>
    <EventHighlight
      title={event.name}
      description={messages.banner}
      background={event.cover_url}
    />
    <EventAbout event={event} messages={messages} />
    <EventSectors event={event} messages={messages} />
    <EventAttractions event={event} messages={messages} />
    <EventServicesIncluded />
    <EventMoreEvents event={event} messages={messages} />
  </Layout>
);

export default Event;
