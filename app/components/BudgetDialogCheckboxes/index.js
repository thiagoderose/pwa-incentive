import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Box from '@livipdev/core/Box';
import FormControl from '@livipdev/core/FormControl';
import FormGroup from '@livipdev/core/FormGroup';
import FormControlLabel from '@livipdev/core/FormControlLabel';
import FormLabel from '@livipdev/core/FormLabel';
import Checkbox from '@livipdev/core/Checkbox';

import messages from './messages';

const BudgetDialogCheckboxes = ({ name, onChange, value }) => {
  const intl = useIntl();
  return (
    <Box my={6}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{intl.formatMessage(messages.label)}</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox name={name} checked={value[name].tickets} onChange={onChange} value="tickets" />}
            label={intl.formatMessage(messages.tickets)}
          />
          <FormControlLabel
            control={<Checkbox name={name} checked={value[name].hotel} onChange={onChange} value="hotel" />}
            label={intl.formatMessage(messages.hotel)}
          />
          <FormControlLabel
            control={<Checkbox name={name} checked={value[name].air} onChange={onChange} value="air" />}
            label={intl.formatMessage(messages.air)}
          />
          <FormControlLabel
            control={<Checkbox name={name} checked={value[name].transfers} onChange={onChange} value="transfers" />}
            label={intl.formatMessage(messages.transfers)}
          />
          <FormControlLabel
            control={<Checkbox name={name} checked={value[name].tours} onChange={onChange} value="tours" />}
            label={intl.formatMessage(messages.tours)}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
BudgetDialogCheckboxes.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};

export default BudgetDialogCheckboxes;
