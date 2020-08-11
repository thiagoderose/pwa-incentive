import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';
import Typography from '@livipdev/core/Typography';

const Testimonial = ({ author, classes, text }) => (
  <Box className={classes.wrapper}>
    <Typography className={classes.text}>
      {text}
    </Typography>
    <Typography className={classes.text}>
      <span className={classes.name}>{author.name}</span> - {author.role} - {author.company}
    </Typography>
  </Box>
);

Testimonial.propTypes = {
  author: PropTypes.shape({
    company: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  classes: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    wrapper: PropTypes.string,
  }),
  text: PropTypes.string.isRequired,
};

export default Testimonial;
