import { defineMessages } from 'react-intl';
import { homeRef } from '../Home/messages';

export const testimonialsRef = `${homeRef}.testimonials`;

export default defineMessages({
  title: {
    id: `${testimonialsRef}.title`,
    defaultMessage: 'Depoimentos',
  },
});
