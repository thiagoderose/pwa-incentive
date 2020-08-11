import styled from '@livipdev/core/styles/styled';

const SectorsContentMiddlePanel = styled('div')(({ theme }) => ({
  background: `linear-gradient(to bottom, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  color: theme.palette.common.white,
  width: '23%',
  padding: '5vw 2.5vw',
  [theme.breakpoints.down('sm')]: {
    width: '50%',
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
}));

export default SectorsContentMiddlePanel;
