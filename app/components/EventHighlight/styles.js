const styles = (theme) => ({
  title: {
    color: theme.palette.common.white,
    marginBottom: '10vh',

    '& > h1': {
      fontSize: '7rem',

      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    },

    '& > h6': {
      fontSize: '4rem',
      fontWeight: 200,
    },
  },
});

export default styles;
