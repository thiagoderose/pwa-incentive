import { defineMessages } from 'react-intl';

export const scope = 'app.components.ProjectCard';

export default defineMessages({
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'to {company}',
  },

  button: {
    id: `${scope}.button`,
    defaultMessage: 'See more',
  },
});
