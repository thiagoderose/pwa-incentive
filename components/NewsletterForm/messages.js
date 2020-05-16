import { defineMessages } from 'react-intl';

export const scope = 'app.newsletter.NewsletterForm';

export default defineMessages({
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Enviar',
  },

  label: {
    id: `${scope}.label`,
    defaultMessage: 'digite aqui seu email',
  },
});
