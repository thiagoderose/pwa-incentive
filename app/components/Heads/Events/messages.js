import { defineMessages } from 'react-intl';
import { eventsRef } from '../../../containers/Events/messages';

const eventsHeadRef = `${eventsRef}.head`;

export default defineMessages({
  title: {
    id: `${eventsHeadRef}.title`,
    defaultMessage: 'Events | Livip Travel - The best way to experience sport events',
  },

  description: {
    id: `${eventsHeadRef}.description`,
    defaultMessage: 'See the list of currently available events where you can live a unique Livip Travel experience.',
  },

  keywords: {
    id: `${eventsHeadRef}.keywords`,
    defaultMessage: 'events sports experience customers vip list',
  },
});
