import styled from '@livipdev/core/styles/styled';

const SectorsContentRightPanel = styled('div')(({ theme }) => ({
  background: theme.palette.grey.background,
  width: '32%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    width: '50%',
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
}));

export default SectorsContentRightPanel;
