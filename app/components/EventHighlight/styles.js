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
  },
});

export default styles;
