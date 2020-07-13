import { defineMessages } from 'react-intl';

const scope = 'app.components.BudgetDialogCheckboxes';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Quotation of other services:',
  },
  hotel: {
    id: `${scope}.hotel`,
    defaultMessage: 'Hotel',
  },
  air: {
    id: `${scope}.air`,
    defaultMessage: 'Air',
  },
  transfers: {
    id: `${scope}.transfers`,
    defaultMessage: 'Transfers',
  },
  tours: {
    id: `${scope}.tours`,
    defaultMessage: 'Tours',
  },
});
