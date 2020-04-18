import React from 'react';
import Grid from '@livip/core/Grid';
import IntlButton from '@livip/core/IntlButton';

import messages from './messages';
import propTypes from './propTypes';

const HomeNextEventsButtons = ({ classes }) => (
  <Grid className={classes.container} justify="center" container>
    <IntlButton
      variant="outlined"
      color="primary"
      className={classes.button}
      message={messages.seeMore}
    />
  </Grid>
);

HomeNextEventsButtons.propTypes = propTypes;

export default HomeNextEventsButtons;
