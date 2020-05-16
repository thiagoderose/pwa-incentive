import React from 'react';
import PropTypes from 'prop-types';

import Container from '@livip/core/Container';
import Grid from '@livip/core/Grid';
import Box from '@livip/core/Box';

const Footer = ({ classes }) => (
  <Box className={classes.root} component="footer">
    <Container>
      <Grid container>
        <Grid item xs={12} md={3}>

        </Grid>
        <Grid item xs={12} md={3}>

        </Grid>
        <Grid item xs={12} md={3}>

        </Grid>
        <Grid item xs={12} md={3}>

        </Grid>
      </Grid>
    </Container>
  </Box>
);

Footer.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

export default Footer;
