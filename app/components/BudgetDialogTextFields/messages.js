import { defineMessages } from 'react-intl';

const scope = 'app.components.BudgetDialogTextFields';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'full name',
  },
  company: {
    id: `${scope}.company`,
    defaultMessage: 'company',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'e-mail',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'phone',
  },
  event: {
    id: `${scope}.event`,
    defaultMessage: 'event of interest',
  },
  quantity: {
    id: `${scope}.quantity`,
    defaultMessage: 'number of guests',
  },
});
