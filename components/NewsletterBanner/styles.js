export default function (theme) {
  return {
    typography: {
      color: theme.palette.common.white,
      marginBottom: `${theme.spacing(2)}px`,
      textAlign: 'center',

      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
        textAlign: 'left',
      },
    },

    button: {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },

    input: {
      marginRight: `${theme.spacing(2)}px`,
      '& .MuiInputLabel-root, & .MuiInputBase-root': {
        color: theme.palette.common.white,
      },
      '& .MuiInput-underline:before, & .MuiInput-underline:after': {
        borderColor: theme.palette.common.white,
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderColor: theme.palette.common.white,
      },
    },

    wrapper: {
      backgroundColor: theme.palette.primary.main,
      paddingBottom: `${theme.spacing(5)}px`,
      paddingTop: `${theme.spacing(5)}px`,
      paddingRight: `${theme.spacing(4)}px`,
      paddingLeft: `${theme.spacing(4)}px`,

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
