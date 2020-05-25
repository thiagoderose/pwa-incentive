import React from 'react';
import PropTypes from 'prop-types';

import Container from '@livipdev/core/Container';
import Grid from '@livipdev/core/Grid';
import Box from '@livipdev/core/Box';
import Hidden from '@livipdev/core/Hidden';
import Divider from '@livipdev/core/Divider';
import SocialIcons from '@livipdev/core/SocialIcons';

import FooterLogo from '../../components/FooterLogo';
import FooterLinks from '../../components/FooterLinks';
import FooterContact from '../../components/FooterContact';
import FooterNewsletter from '../../components/FooterNewsletter';
import FooterChat from '../../components/FooterChat';
import FooterAddress from '../../components/FooterAddress';
import FooterIntl from '../../components/FooterIntl';
import FooterSectiontitle from '../../components/FooterSectionTitle';

import messages from './messages';

const Footer = ({ classes, variant }) => (
  <Box className={classes.root} component="footer">
    <Container>
      <Box component={Grid} container pt={5} mb={3} textAlign={{ xs: 'center', md: 'left' }}>
        <Grid item xs={12} md={3}>
          <Box component={FooterLogo} variant={variant} mb={3} />
          <Hidden smDown>
            <Box ml={-1}>
              <SocialIcons />
            </Box>
          </Hidden>
        </Grid>
        <Grid item xs={12} md={3}>
          <Hidden smDown>
            <FooterLinks />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box mb={3}>
            <FooterContact />
          </Box>
          <FooterNewsletter />
          <Box mt={3} component="div">
            <Hidden mdUp>
              <FooterSectiontitle message={messages.socialNetworks} />
              <SocialIcons />
            </Hidden>
          </Box>
        </Grid>
        <Box component={Grid} item xs={12} md={3} display="flex" alignItems="center" justifyContent="center">
          <Hidden smDown>
            <FooterChat />
          </Hidden>
        </Box>
      </Box>
    </Container>
    <Divider className={classes.divider} />
    <Container>
      <Box
        component={Grid}
        container
        justify="space-between"
        alignItems="center"
        py={5}
      >
        <Grid item>
          <FooterAddress />
        </Grid>
        <Grid item>
          <FooterIntl />
        </Grid>
      </Box>
    </Container>
  </Box>
);

Footer.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    divider: PropTypes.string,
  }),
  variant: PropTypes.string,
};

export default Footer;
