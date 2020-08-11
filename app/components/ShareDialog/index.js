import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@livipdev/core/Dialog';

import messages from './messages';

const ShareDialog = ({ ...props }) => (
  <Dialog
    {...props}
    fullWidth
    maxWidth="sm"
    title={messages.title}
  >
    {/* Missin icons */}
  </Dialog>
);

ShareDialog.propTypes = {
  onClose: PropTypes.func,
};

export default ShareDialog;
