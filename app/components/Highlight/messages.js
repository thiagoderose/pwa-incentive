import { defineMessages } from 'react-intl';
import { homeRef } from '../../containers/Home/messages';

const highlightRef = `${homeRef}.highlight`;

export default defineMessages({
  title: {
    id: `${highlightRef}.title`,
    defaultMessage: 'Live the experience of the greatest international sport events.',
  },

  subtitle: {
    id: `${highlightRef}.subtitle`,
    defaultMessage: 'You and your guests together in the greatest moments in the history of sports.',
  },
});
