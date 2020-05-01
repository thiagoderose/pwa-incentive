export default function (theme) {
  return {
    typography: {
      color: theme.palette.common.white,
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
      borderLeft: `8px solid ${theme.palette.primary.contrastText}`,
      paddingBottom: `${theme.spacing(5)}px`,
      paddingTop: `${theme.spacing(5)}px`,
      paddingRight: `${theme.spacing(15)}px`,
      paddingLeft: `${theme.spacing(14)}px`,
    },
  };
}
