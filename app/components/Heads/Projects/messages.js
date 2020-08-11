import { defineMessages } from 'react-intl';
import { projectsRef } from '../../../containers/Projects/messages';

const projectsHeadRef = `${projectsRef}.head`;

export default defineMessages({
  title: {
    id: `${projectsHeadRef}.title`,
    defaultMessage: 'Projects | Livip Travel - The best way to experience sport projects',
  },

  description: {
    id: `${projectsHeadRef}.description`,
    defaultMessage: 'See the list of our last projects where our users had a unique Livip Travel experience.',
  },

  keywords: {
    id: `${projectsHeadRef}.keywords`,
    defaultMessage: 'projects sports experience customers vip list',
  },
});
