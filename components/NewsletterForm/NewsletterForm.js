import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Box from '@livip/core/Box';
import Button from '@livip/core/Button';
import TextField from '@livip/core/TextField';

import messages from './messages';

const NewsletterForm = ({ classes, onSubmit }) => {
  const [email, setEmail] = useState('');
  const intl = useIntl();

  const handleChange = (event) => setEmail(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <Box
      alignItems="center"
      component="form"
      display="flex"
      onSubmit={handleSubmit}
    >
      <TextField
        value={email}
        label={intl.formatMessage(messages.label)}
        type="email"
        onChange={handleChange}
        className={classes.input}
        required
      />
      <Button
        type="submit"
        variant="contained"
        className={classes.button}
        size="small"
      >
        {intl.formatMessage(messages.send)}
      </Button>
    </Box>
  );
};

NewsletterForm.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string,
    input: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NewsletterForm;
