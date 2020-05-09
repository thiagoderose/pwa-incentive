import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Box from '@livip/core/Box';
import Button from '@livip/core/Button';
import Typography from '@livip/core/Typography';

import messages from './messages';

const ProjectCard = ({ company, title }) => (
  <Box height="40vw">
    <Typography>
      {title}
    </Typography>
    <Typography message={{ ...messages.subtitle, values: { company } }} />
    <Button>
      <FormattedMessage {...messages.button} />
    </Button>
  </Box>
);

ProjectCard.propTypes = {
  company: PropTypes.object,
  title: PropTypes.object,
};

export default ProjectCard;
