import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Box from '@livip/core/Box';
import Button from '@livip/core/Button';
import Grid from '@livip/core/Grid';
import TextField from '@livip/core/TextField';
import Typography from '@livip/core/Typography';

import messages from './messages';

const NewsletterBanner = ({ classes, onSubmit }) => {
  const intl = useIntl();
  const [email, setEmail] = useState('');

  const handleChange = (event) => setEmail(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <Box className={classes.wrapper}>
      <Grid container alignItems="center">
        <Grid item flex={1} lg={8}>
          <Typography
            message={messages.title}
            variant="h3"
            className={classes.typography}
          />
        </Grid>
        <Grid item lg={4}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

NewsletterBanner.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string,
    input: PropTypes.string,
    typography: PropTypes.string,
    wrapper: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NewsletterBanner;
