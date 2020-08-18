import styled from '@livipdev/core/styles/styled';

const SectorsContentLeftPanel = styled('div')(({ theme }) => ({
  width: '45%',

  '&> div': {
    height: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export default SectorsContentLeftPanel;
