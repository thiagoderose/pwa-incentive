const styles = (theme) => ({
  wrapper: {
    textAlign: 'center',
    maxWidth: '300px',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '450px',
    },

    [theme.breakpoints.up('md')]: {
      maxWidth: '630px',
    },
  },

  name: {
    color: theme.palette.common.black,
  },

  text: {
    fontSize: '.9rem',
    fontStyle: 'italic',
    fontWeight: 500,
    color: theme.palette.grey.disabled,
    '&:not(:last-of-type)': {
      marginBottom: '1rem',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
  },
});

export default styles;
