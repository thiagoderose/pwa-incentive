import React from 'react';
import ContainerWithBackground from '@livip/core/ContainerWithBackground';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Highlight = ({ variant }) => (
  <ContainerWithBackground variant={variant} />
);

Highlight.propTypes = propTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
