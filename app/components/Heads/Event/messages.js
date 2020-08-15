import { defineMessages } from 'react-intl';
import { homeRef } from '../../../containers/Home/messages';

const homeHeadRef = `${homeRef}.head`;

export default defineMessages({
  title: {
    id: `${homeHeadRef}.title`,
    defaultMessage: 'Livip Incentive - The best way to experience sport events',
  },

  description: {
    id: `${homeHeadRef}.description`,
    defaultMessage: 'We offer you the greatest experience that you can provide to your customers in a sport event.',
  },

  keywords: {
    id: `${homeHeadRef}.keywords`,
    defaultMessage: 'events sports experience customers vip',
  },
});
