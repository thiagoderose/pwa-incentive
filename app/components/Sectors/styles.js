const styles = theme => ({
  tabsBox: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: theme.palette.grey[300],
  },

  tabs: {
    '& button': {
      padding: 0,

      '& > span': {
        padding: '0 32px',
        borderRightWidth: 1,
        borderRightStyle: 'solid',
        borderRightColor: theme.palette.grey[300],
        transition: '0.4s all ease-in-out',

        '&:last-child': {
          borderRight: 'none',
        },

        '&:hover': {
          color: theme.palette.primary.main,
        },
      },

      '&:last-child span': {
        borderRight: 'none',
      },
    },

    '& > div > span': {
      display: 'none',
    },
  },
});

export default styles;
