import { defineMessages } from 'react-intl';
import { homeRef } from '../Home/messages';

export const nextEventsRef = `${homeRef}.nextEvents`;

export default defineMessages({
  title: {
    id: `${nextEventsRef}.title`,
    defaultMessage: 'Próximos eventos',
  },

  subtitle: {
    id: `${nextEventsRef}.subtitle`,
    defaultMessage: 'Recomendamos a você os seguintes destinos com um excelente desconto',
  },
});
