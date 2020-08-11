import { defineMessages } from 'react-intl';
import { homeRef } from '../Home/messages';

export const nextEventsRef = `${homeRef}.nextEvents`;

export default defineMessages({
  title: {
    id: `${nextEventsRef}.title`,
    defaultMessage: 'Next events',
  },

  subtitle: {
    id: `${nextEventsRef}.subtitle`,
    defaultMessage: 'We recommend you the next destinations with a sweet discounted price',
  },
});
