const styles = (theme) => ({
  root: {
    '--slider-height-percentage': '75%',
    'margin-bottom': `${theme.spacing(7)}px`,

    [theme.breakpoints.up('sm')]: {
      '--slider-height-percentage': '68%',
    },

    [theme.breakpoints.up('md')]: {
      '--slider-height-percentage': '35%',
    },
  },
});

export default styles;
