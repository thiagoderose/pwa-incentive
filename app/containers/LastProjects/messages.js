import { defineMessages } from 'react-intl';
import { homeRef } from '../Home/messages';

export const lastProjectsRef = `${homeRef}.lastProjects`;

export default defineMessages({
  title: {
    id: `${lastProjectsRef}.title`,
    defaultMessage: 'Últimos projetos',
  },
});
