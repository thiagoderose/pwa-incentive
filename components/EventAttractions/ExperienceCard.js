import styled from '@livipdev/core/styles/styled';
import Box from '@livipdev/core/Box';

const ExperienceCard = styled(Box)(({ background, theme }) => ({
  alignItems: 'flex-end',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: theme.palette.common.white,
  display: 'flex',
  height: '22vw',
  padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
  width: '33.3vw',
  position: 'relative',

  '&::before': {
    content: ' ',
    display: 'block',
    backgroundImage: `linear-gradient(to top, ${theme.palette.common.black}, trasparent)`,
    position: 'absolute',
    top: '50%',
    bottom: 0,
    width: '100%',
  },
}));

export default ExperienceCard;
