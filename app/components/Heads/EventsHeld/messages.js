import { defineMessages } from 'react-intl';
import { eventsHeldRef } from '../../../containers/EventsHeld/messages';

const eventsHeldHeadRef = `${eventsHeldRef}.head`;

export default defineMessages({
  title: {
    id: `${eventsHeldHeadRef}.title`,
    defaultMessage: 'Eventos Realizados | Livip Incentive - A melhor forma de viver eventos esportivos',
  },

  description: {
    id: `${eventsHeldHeadRef}.description`,
    defaultMessage: 'Nós oferecemos a você a melhor experiência VIP que você pode oferecer aos seus clientes em um evento esportivo.',
  },

  keywords: {
    id: `${eventsHeldHeadRef}.keywords`,
    defaultMessage: 'eventos esportes experiência clientes vip camarote lista',
  },
});
