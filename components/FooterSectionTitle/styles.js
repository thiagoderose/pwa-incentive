export default function (theme) {
  return {
    title: {
      marginBottom: `${theme.spacing(2)}px`,
      color: '#a05576',
      fontSize: '1rem',
      textAlign: 'center',

      [theme.breakpoints.up('md')]: {
        textAlign: 'unset',
      },
    },
  };
}
