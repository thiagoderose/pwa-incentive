export default function (theme) {
  return {
    typography: {
      color: theme.palette.primary.main,
      marginBottom: `${theme.spacing(2)}px`,
      textAlign: 'center',

      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
        textAlign: 'left',
      },
    },

    wrapper: {
      paddingBottom: `${theme.spacing(5)}px`,
      paddingTop: `${theme.spacing(5)}px`,
      paddingRight: `${theme.spacing(4)}px`,
      paddingLeft: `${theme.spacing(4)}px`,
      border: `1px solid ${theme.palette.primary.main}`,

      [theme.breakpoints.up('md')]: {
        paddingRight: `${theme.spacing(15)}px`,
        paddingLeft: `${theme.spacing(14)}px`,
      },

      [theme.breakpoints.up('sm')]: {
        borderLeft: `8px solid ${theme.palette.primary.contrastText}`,
        paddingRight: `${theme.spacing(10)}px`,
        paddingLeft: `${theme.spacing(9)}px`,
      },
    },
  };
}
