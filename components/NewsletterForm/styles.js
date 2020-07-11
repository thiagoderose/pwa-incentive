export default function (theme) {
  return {
    button: {
      color: ({ color }) => theme.palette[color] || theme.palette.primary.main,
      fontWeight: 600,
    },

    input: {
      width: theme.sizes.fullwidth.width,
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
  };
}
