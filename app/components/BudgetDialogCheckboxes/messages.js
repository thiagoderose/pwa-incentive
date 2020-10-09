import { defineMessages } from 'react-intl';

const scope = 'app.components.BudgetDialogCheckboxes';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Cotação de outros serviços:',
  },
  hotel: {
    id: `${scope}.hotel`,
    defaultMessage: 'Hotel',
  },
  air: {
    id: `${scope}.air`,
    defaultMessage: 'Aéreo',
  },
  transfers: {
    id: `${scope}.transfers`,
    defaultMessage: 'Translados',
  },
  tours: {
    id: `${scope}.tours`,
    defaultMessage: 'Passeios Turísticos',
  },
  tickets: {
    id: `${scope}.tickets`,
    defaultMessage: 'Ingressos',
  },
});
