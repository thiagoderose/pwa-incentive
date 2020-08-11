import { defineMessages } from 'react-intl';

const scope = 'app.components.BudgetDialog';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Request a quote',
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'Leave the contact of the person in charge and we will contact you.',
  },
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Send',
  },
});
