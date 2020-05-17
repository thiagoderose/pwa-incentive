import React from 'react';

import Box from '@livipdev/core/Box';
import Typography from '@livipdev/core/Typography';

import FooterSectionTitle from '../FooterSectionTitle';
import * as constants from './constants';
import messages from './messages';

const FooterContact = () => (
  <>
    <FooterSectionTitle message={messages.title} />
    <Box component={Typography} textAlign={{ sm: 'center', md: 'unset' }}>
      {constants.PHONE}
    </Box>
    <Box component={Typography} textAlign={{ sm: 'center', md: 'unset' }}>
      {constants.EMAIL}
    </Box>
  </>
);

export default FooterContact;
