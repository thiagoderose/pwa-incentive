const styles = (theme) => ({
  wrapper: {
    textAlign: 'center',
    maxWidth: '630px',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',
  },

  name: {
    color: theme.palette.common.black,
  },

  text: {
    fontSize: '1.125rem',
    fontStyle: 'italic',
    fontWeight: 500,
    color: theme.palette.grey.disabled,
    '&:not(:last-of-type)': {
      marginBottom: '1rem',
    },
  },
});

export default styles;
