import React from 'react';

import Typography from '@livip/core/Typography';

import FooterSectionTitle from '../FooterSectionTitle';
import * as constants from './constants';
import messages from './messages';

const FooterContact = () => (
  <>
    <FooterSectionTitle message={messages.title} />
    <Typography>
      {constants.PHONE}
    </Typography>
    <Typography>
      {constants.EMAIL}
    </Typography>
  </>
);

export default FooterContact;
