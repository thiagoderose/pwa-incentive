import { defineMessages } from 'react-intl';
import { eventsRef } from '../../../containers/Events/messages';

const eventsHeadRef = `${eventsRef}.head`;

export default defineMessages({
  title: {
    id: `${eventsHeadRef}.title`,
    defaultMessage: 'Próximos Eventos | Livip Incentive - A melhor forma de viver eventos esportivos',
  },

  description: {
    id: `${eventsHeadRef}.description`,
    defaultMessage: 'Nós oferecemos a você a melhor experiência VIP que você pode oferecer aos seus clientes em um evento esportivo.',
  },

  keywords: {
    id: `${eventsHeadRef}.keywords`,
    defaultMessage: 'eventos esportes experiência clientes vip camarote lista',
  },
});
