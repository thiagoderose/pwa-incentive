import styled from '@livipdev/core/styles/styled';
import Box from '@livipdev/core/Box';

const ExperienceCard = styled(Box)(({ theme }) => ({
  alignItems: 'flex-end',
  backgroundImage: (props) => `url(${props.background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: theme.palette.common.white,
  display: 'flex',
  height: '320px',
  padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
  width: '420px',
}));

export default ExperienceCard;
