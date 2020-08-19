import { defineMessages } from 'react-intl';

const scope = 'app.components.TellYourCompanyDialog';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Indique para sua empresa',
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'Com quem podemos falar sobre projetos de relacionamento e incentivo em eventos esportivos?',
  },
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Enviar',
  },
});
