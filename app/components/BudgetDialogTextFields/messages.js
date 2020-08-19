import { defineMessages } from 'react-intl';

const scope = 'app.components.BudgetDialogTextFields';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Nome completo',
  },
  company: {
    id: `${scope}.company`,
    defaultMessage: 'Nome da empresa',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'E-mail',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Telefone',
  },
  event: {
    id: `${scope}.event`,
    defaultMessage: 'Evento de interesse',
  },
  quantity: {
    id: `${scope}.quantity`,
    defaultMessage: 'Quantidade estimada de convidados',
  },
});
