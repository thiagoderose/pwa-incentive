import React from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Typography from '@livip/core/Typography';
import messages from './messages';

const FooterIntl = () => (
  <Typography variant="body2">
    <FormattedMessage {...messages.pt} /> | <FormattedMessage {...messages.en} />
  </Typography>
);

FooterIntl.propTypes = {
};

export default FooterIntl;
