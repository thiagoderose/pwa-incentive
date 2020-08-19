import { defineMessages } from 'react-intl';
import { projectsRef } from '../../../containers/Projects/messages';

const projectsHeadRef = `${projectsRef}.head`;

export default defineMessages({
  title: {
    id: `${projectsHeadRef}.title`,
    defaultMessage: 'Projetos | Livip Incentive - A melhor forma de viver eventos esportivos',
  },

  description: {
    id: `${projectsHeadRef}.description`,
    defaultMessage: 'Nós criamos projetos para você oferecer a melhor experiência VIP aos seus clientes em um evento esportivo.',
  },

  keywords: {
    id: `${projectsHeadRef}.keywords`,
    defaultMessage: 'projetos esportes experiência clientes vip camarote lista',
  },
});
