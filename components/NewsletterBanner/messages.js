import { defineMessages } from 'react-intl';

export const scope = 'app.newsletter.NewsletterBanner';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Receba as novidades dos eventos e produtos em primeira mão.',
  },

  send: {
    id: `${scope}.send`,
    defaultMessage: 'Enviar',
  },

  label: {
    id: `${scope}.label`,
    defaultMessage: 'digite aqui seu email',
  },
});
