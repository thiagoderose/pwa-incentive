import { defineMessages } from 'react-intl';

const scope = 'app.containers.Event';

export default defineMessages({
  banner: {
    id: `${scope}.banner`,
    defaultMessage: 'Deixe por nossa conta, somos experts em eventos vip no mundo todo',
  },
  event: {
    id: `${scope}.event`,
    defaultMessage: 'O Evento',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'Tenho interesse',
  },
  attractions: {
    id: `${scope}.attractions`,
    defaultMessage: 'Experiências e atrações',
  },
  nearby: {
    id: `${scope}.nearby`,
    defaultMessage: 'O melhor de {city}',
  },
  otherEvents: {
    id: `${scope}.otherEvents`,
    defaultMessage: 'Outros eventos',
  },
  otherEventsSubtitle: {
    id: `${scope}.otherEventsSubtitle`,
    defaultMessage: 'Nós recomendamos os seguintes destinos com um excelente preço',
  },
  sectors: {
    id: `${scope}.sectors`,
    defaultMessage: 'Setores',
  },
});
