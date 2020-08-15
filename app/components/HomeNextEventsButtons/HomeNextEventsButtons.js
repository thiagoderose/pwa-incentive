import React from 'react';
import Grid from '@livipdev/core/Grid';
import IntlButton from '@livipdev/core/IntlButton';

import messages from './messages';
import propTypes from './propTypes';

const HomeNextEventsButtons = ({ classes }) => (
  <Grid className={classes.container} justify="center" container>
    <IntlButton
      variant="outlined"
      color="primary"
      className={classes.button}
      message={messages.seeMore}
      href="/proximos-eventos"
    />
  </Grid>
);

HomeNextEventsButtons.propTypes = propTypes;

export default HomeNextEventsButtons;
