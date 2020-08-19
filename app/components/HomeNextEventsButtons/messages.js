import { defineMessages } from 'react-intl';
import { nextEventsRef } from '../../containers/NextEvents/messages';

const nextEventsButtonsRef = `${nextEventsRef}.buttons`;

export default defineMessages({
  seeMore: {
    id: `${nextEventsButtonsRef}.seeMore`,
    defaultMessage: 'Ver mais',
  },
});
