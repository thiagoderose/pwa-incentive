import { defineMessages } from 'react-intl';

const scope = 'app.components.TellYourCompanyDialogTextFields';

export default defineMessages({
  company: {
    id: `${scope}.company`,
    defaultMessage: 'Nome da empresa',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Nome do responsável',
  },
  deptRole: {
    id: `${scope}.deptRole`,
    defaultMessage: 'Departamento/Cargo',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Telefone',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'E-mail do responsável',
  },
});
