import { defineMessages } from 'react-intl';

const scope = 'app.components.TellYourCompanyDialogTextFields';

export default defineMessages({
  company: {
    id: `${scope}.company`,
    defaultMessage: 'Company name',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Responsible name',
  },
  deptRole: {
    id: `${scope}.deptRole`,
    defaultMessage: 'Department/Role',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'phone',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Responsible e-mail',
  },
});
