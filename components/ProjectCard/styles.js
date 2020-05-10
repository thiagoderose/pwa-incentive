export default function (theme) {
  return {
    wrapper: {
      // look and feel
      borderRadius: '5px',
      color: theme.palette.common.white,
      height: '600px',
      marginBottom: ({ gutterBottom }) => gutterBottom ? `${theme.spacing(3)}px` : '0',
      width: '600px',
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
