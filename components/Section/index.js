import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';

const Section = ({ children, component, gutterX, gutterY, noGutter, ...props }) => {
  const paddingY = noGutter ? 0 : gutterY;
  const paddingX = noGutter ? 0 : gutterX;

  return (
    <Box {...props} component={component} py={paddingY} px={paddingX}>
      {children}
    </Box>
  );
};

Section.defaultProps = {
  component: 'section',
  noGutter: false,
  gutterY: 7,
  gutterX: 0,
};

Section.propTypes = {
  children: PropTypes.any,
  component: PropTypes.string,
  gutterX: PropTypes.number,
  gutterY: PropTypes.number,
  noGutter: PropTypes.bool,
};

export default Section;
