import { defineMessages } from 'react-intl';
import { eventsHeldRef } from '../../../containers/EventsHeld/messages';

const eventsHeldHeadRef = `${eventsHeldRef}.head`;

export default defineMessages({
  title: {
    id: `${eventsHeldHeadRef}.title`,
    defaultMessage: 'Events Held | Livip Travel - The best way to experience sport events',
  },

  description: {
    id: `${eventsHeldHeadRef}.description`,
    defaultMessage: 'See the list of hekd events where our customers experienced an unique Livip Travel experience.',
  },

  keywords: {
    id: `${eventsHeldHeadRef}.keywords`,
    defaultMessage: 'events sports experience customers vip list',
  },
});
