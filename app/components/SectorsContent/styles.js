export default function (theme) {
  return {
    image: {
      display: 'block',
      height: '100%',
      objectFit: 'cover',
      width: '100%',
    },

    title: {
      fontSize: '1.5rem',
      fontWeight: '700',
    },

    description: {
      fontSize: '1rem',
      fontWeight: '300',
      lineHeight: '2rem',
    },

    list: {
      fontSize: '1rem',
      fontWeight: '400',
      padding: '0 4rem',
      listStyle: 'none',
    },

    listItem: {
      marginBottom: '1rem',
      position: 'relative',
      display: 'block',
      '&::before': {
        position: 'absolute',
        top: '8px',
        left: '-30px',
        content: '" "',
        display: 'block',
        width: '15px',
        height: '3px',
        backgroundColor: '#732d50',
        // marginRight: 0.2rem,
      },
    },

    carousel: {
      height: '100%',

      '&> div:first-child': {
        height: '100%',

        '&> ul': {
          height: '100%',
        },
      },
    },

    carouselDotsBox: {
      position: 'relative',
      top: -80,

      '& .BrainhubCarousel__dot': {
        backgroundColor: theme.palette.common.white,
        border: '1px solid tranparent',
        borderRadius: '50%',
        width: 10,
        height: 10,
        opacity: 1,
        padding: 0,
        marginLeft: 16,
        marginRight: 16,

        '&.BrainhubCarousel__dot--selected': {
          '&:after': {
            display: 'block',
            content: '""',
            border: '2px solid white',
            borderRadius: '50%',
            width: 22,
            height: 22,
            marginLeft: -6,
            position: 'absolute',
            top: -5.7,
          }
        },

        '&:before': {
          display: 'none',
        },
      },
    },
  };
}
