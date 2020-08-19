import { defineMessages } from 'react-intl';
import { homeRef } from '../../containers/Home/messages';

const highlightRef = `${homeRef}.highlight`;

export default defineMessages({
  title: {
    id: `${highlightRef}.title`,
    defaultMessage: 'Os grandes eventos esportivos internacionais.',
  },

  subtitle: {
    id: `${highlightRef}.subtitle`,
    defaultMessage: 'Você e seus convidados juntos nos maiorei momentos da história do Esporte.',
  },
});
