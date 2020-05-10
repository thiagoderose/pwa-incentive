import { defineMessages } from 'react-intl';
import { homeRef } from '../Home/messages';

export const servicesIncludedRef = `${homeRef}.servicesIncluded`;

export default defineMessages({
  title: {
    id: `${servicesIncludedRef}.title`,
    defaultMessage: 'Services Included',
  },
});
