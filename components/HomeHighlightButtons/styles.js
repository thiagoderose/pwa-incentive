const styles = (theme) => ({
  root: {
    ...theme.alignments.equallySpaced,
    ...theme.alignments.wrappedWithSomeSpace,

    height: '45px',
    overflow: 'hidden',

    '&> *' : {
      marginBottom: theme.spaces.default.value,
    },

    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spaces.default.value,
      paddingRight: theme.spaces.default.value,
    },

    [theme.breakpoints.down('xs')]: {
      ...theme.visibilities.removed,
    },
  },
});

export default styles;
