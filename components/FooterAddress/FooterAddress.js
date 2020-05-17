import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livip/core/Box';
import Typography from '@livip/core/Typography';

const FooterAddress = ({ classes }) => (
  <Box py={2}>
    <Typography className={classes.address}>
      Rua Capote Valente, 39 - 05409-000 - São Paulo, SP
    </Typography>
  </Box>
);

FooterAddress.propTypes = {
  classes: PropTypes.shape({
    address: PropTypes.string,
  }),
};

export default FooterAddress;
