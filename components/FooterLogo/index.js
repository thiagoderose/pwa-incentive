import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';
import Logotype from '@livipdev/core/Logotype';

const FooterLogo = ({ variant, ...props }) => (
  <Box {...props} component="div">
    <Logotype variant={variant} />
  </Box>
);

FooterLogo.propTypes = {
  variant: PropTypes.string,
};

export default FooterLogo;
