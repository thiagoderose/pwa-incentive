import React from 'react';
import ContainerWithBackground from '@livip/core/ContainerWithBackground';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Highlight = ({ background, variant }) => (
  <ContainerWithBackground
    background={background}
    variant={variant}
  >
    <div>OK</div>
  </ContainerWithBackground>
);

Highlight.propTypes = propTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
