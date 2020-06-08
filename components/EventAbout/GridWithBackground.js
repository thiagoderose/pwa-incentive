import styled from '@livipdev/core/styles/styled';
import Grid from '@livipdev/core/Grid';

const GridWithBackground = styled(Grid)({
  backgroundImage: (props) => `url(${props.background})`,
  backgroundSize: 'calc(50% - 16px) 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
});

export default GridWithBackground;
