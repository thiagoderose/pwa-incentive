const styles = (theme) => ({
  root: {
    '--content-background-color': 'transparent',
    '--slider-height-percentage': '50%',
    'margin-bottom': `${theme.spacing(7)}px`,

    ['& .awssld__controls button .awssld__controls__arrow-right:before,'
    + '& .awssld__controls button .awssld__controls__arrow-right:after,'
    + '& .awssld__controls button .awssld__controls__arrow-left:before,'
    + '& .awssld__controls button .awssld__controls__arrow-left:after']: {
      backgroundColor: theme.palette.common.black,
    },

    [theme.breakpoints.up('sm')]: {
      '--slider-height-percentage': '40%',
    },

    [theme.breakpoints.up('md')]: {
      '--slider-height-percentage': '20%',
    },
  },
});

export default styles;
