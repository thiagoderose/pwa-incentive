import { defineMessages } from 'react-intl';

const scope = 'app.components.BudgetDialog';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Solicite um orçamento',
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'Deixe o contato do responsável que entraremos em contato.',
  },
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Enviar',
  },
});
