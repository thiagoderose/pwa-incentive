import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livip/core/Box';
import Grid from '@livip/core/Grid';
import Typography from '@livip/core/Typography';

import messages from './messages';
import NewsletterForm from '../NewsletterForm';

const NewsletterBanner = ({ classes, onSubmit, width }) => {
  const variant = width === 'xs' ? 'body2' : 'h3';

  return (
    <Box className={classes.wrapper}>
      <Grid container alignItems="center" justify="center">
        <Grid item flex={1} md={8}>
          <Typography
            message={messages.title}
            variant={variant}
            className={classes.typography}
          />
        </Grid>
        <Grid item md={4}>
          <NewsletterForm onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </Box>
  );
};

NewsletterBanner.propTypes = {
  classes: PropTypes.shape({
    typography: PropTypes.string,
    wrapper: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};

export default NewsletterBanner;
