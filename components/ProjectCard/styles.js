export default function (theme) {
  return {
    wrapper: {
      // look and feel
      borderRadius: '5px',
      color: theme.palette.common.white,
      height: '32vw',
      width: '40vw',
      marginBottom: ({ gutterBottom }) => gutterBottom ? `${theme.spacing(3)}px` : '0',
      padding: theme.spacing(4),

      // display properties
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      position: 'relative',

      // background properties
      backgroundColor: theme.palette.primary.light,
      backgroundImage: ({ img }) => `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },

    title: {
      textAlign: 'center',
      marginBottom: '2rem',
    },

    tag: {
      position: 'absolute',
      top: `${theme.spacing(3)}px`,
      left: `${theme.spacing(3)}px`,
      backgroundColor: theme.palette.primary.main,
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      borderRadius: '4px',
      textTransform: 'uppercase',
      fontSize: '.875rem',
      fontWeight: 'bold',
    },
  };
}
