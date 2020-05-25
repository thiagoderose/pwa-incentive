import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

const styles = (theme) => ({
  root: {
    ...theme.sizes.fullwidth,
    ...theme.visibilities.overflowHidden,

    paddingTop: theme.spaces.loose.value,
  },

  tile: {
    ...theme.cards.tile.default,

    '&:hover': {
      ...theme.cards.tile.hover,
    },

    [theme.breakpoints.down(SCREEN_SIZES.MEDIUM)]: {
      marginTop: theme.spaces.default.value,
      marginBottom: theme.spaces.default.value,
    },
  },
});

export default styles;
