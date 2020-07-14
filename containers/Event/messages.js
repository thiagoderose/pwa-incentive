import { defineMessages } from 'react-intl';

const scope = 'app.containers.Event';

export default defineMessages({
  banner: {
    id: `${scope}.banner`,
    defaultMessage: 'Leave it to us, we are experts in VIP events worldwide.',
  },
  event: {
    id: `${scope}.event`,
    defaultMessage: 'The event',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'I\'m interested',
  },
  attractions: {
    id: `${scope}.attractions`,
    defaultMessage: 'Experiences and Attractions',
  },
  nearby: {
    id: `${scope}.nearby`,
    defaultMessage: 'The best of {city}',
  },
  otherEvents: {
    id: `${scope}.otherEvents`,
    defaultMessage: 'Other Events',
  },
  otherEventsSubtitle: {
    id: `${scope}.otherEventsSubtitle`,
    defaultMessage: 'We recommend you the next destinations with a sweet discounted price',
  },
  sectors: {
    id: `${scope}.sectors`,
    defaultMessage: 'Sectors',
  },
});
