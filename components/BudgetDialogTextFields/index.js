import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Grid from '@livipdev/core/Grid';
import TextField from '@livipdev/core/TextField';

import messages from './messages';

const BudgetDialogTextFields = ({ onChange, value }) => {
  const intl = useIntl();

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <TextField
          name="name"
          value={value.name}
          label={intl.formatMessage(messages.name)}
          onChange={onChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          name="company"
          value={value.company}
          label={intl.formatMessage(messages.company)}
          onChange={onChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          name="email"
          value={value.email}
          label={intl.formatMessage(messages.email)}
          onChange={onChange}
          type="email"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          name="phone"
          value={value.phone}
          label={intl.formatMessage(messages.phone)}
          onChange={onChange}
          type="tel"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          name="event"
          value={value.event}
          label={intl.formatMessage(messages.event)}
          onChange={onChange}
          select
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          name="quantity"
          value={value.quantity}
          label={intl.formatMessage(messages.quantity)}
          onChange={onChange}
          type="number"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
BudgetDialogTextFields.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};

export default BudgetDialogTextFields;
