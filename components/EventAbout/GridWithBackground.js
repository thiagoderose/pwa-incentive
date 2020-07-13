import styled from '@livipdev/core/styles/styled';
import Grid from '@livipdev/core/Grid';

const GridWithBackground = styled(Grid)({
  backgroundImage: (props) => `url(${props.background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
});

export default GridWithBackground;
