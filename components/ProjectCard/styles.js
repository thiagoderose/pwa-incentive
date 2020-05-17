export default function (theme) {
  return {
    wrapper: {
      // look and feel
      borderRadius: '5px',
      color: theme.palette.common.white,
      height: '400px',
      width: '400px',
      marginBottom: ({ gutterBottom }) => gutterBottom ? `${theme.spacing(3)}px` : '0',
      padding: theme.spacing(4),

      // display properties
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',

      // background properties
      backgroundColor: theme.palette.primary.light,
      backgroundImage: ({ img }) => `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      '@media screen and (max-width: 320px)': {
        height: '272px',
        width: '272px',
      },

      '@media screen and (max-width: 360px)': {
        height: '312px',
        width: '312px',
      },

      [theme.breakpoints.up('lg')]: {
        height: '400px',
        width: '400px',
      },
    },

    title: {
      textAlign: 'center',
    },

    subtitle: {
      fontStyle: 'italic',
      textAlign: 'center',
      marginBottom: `${theme.spacing(4)}px`,
    },
  };
}
