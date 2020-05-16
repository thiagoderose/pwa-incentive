import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livip/core/Box';
import Grid from '@livip/core/Grid';
import Typography from '@livip/core/Typography';

import messages from './messages';
import NewsletterForm from '../NewsletterForm';

const NewsletterBanner = ({ classes, onSubmit }) => (
  <Box className={classes.wrapper}>
    <Grid container alignItems="center">
      <Grid item flex={1} lg={8}>
        <Typography
          message={messages.title}
          variant="h3"
          className={classes.typography}
        />
      </Grid>
      <Grid item lg={4}>
        <NewsletterForm onSubmit={onSubmit} />
      </Grid>
    </Grid>
  </Box>
);

NewsletterBanner.propTypes = {
  classes: PropTypes.shape({
    typography: PropTypes.string,
    wrapper: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NewsletterBanner;
