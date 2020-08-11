import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import TextField from '@livipdev/core/TextField';

import messages from './messages';

const BudgetDialogMultiline = ({ onChange, value }) => {
  const intl = useIntl();
  return (
    <TextField
      name="comments"
      value={value.comments}
      label={intl.formatMessage(messages.comments)}
      rows={6}
      variant="outlined"
      onChange={onChange}
      multiline
      fullWidth
    />
  );
};
BudgetDialogMultiline.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};

export default BudgetDialogMultiline;
