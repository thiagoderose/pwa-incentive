import React from 'react';
import PropTypes from 'prop-types';

import Container from '@livip/core/Container';
import Grid from '@livip/core/Grid';
import Box from '@livip/core/Box';

import FooterLogo from '../../components/FooterLogo';
import FooterSocial from '../../components/FooterSocial';

const Footer = ({ classes }) => (
  <Box className={classes.root} component="footer">
    <Container>
      <Box component={Grid} container pt={5}>
        <Grid item xs={12} md={3}>
          <FooterLogo />
          <FooterSocial />
        </Grid>
        <Grid item xs={12} md={3}>

        </Grid>
        <Grid item xs={12} md={3}>

        </Grid>
        <Grid item xs={12} md={3}>

        </Grid>
      </Box>
    </Container>
  </Box>
);

Footer.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

export default Footer;
