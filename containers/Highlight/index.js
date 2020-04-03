import React from 'react';
import ContainerWithBackground from '@livip/core/ContainerWithBackground';
import Container from '@livip/core/Container';
import PageTitle from '@livip/core/PageTitle';

import messages from './messages';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Highlight = ({ background, variant }) => (
  <ContainerWithBackground
    background={background}
    variant={variant}
  >
    <Container>
      <PageTitle
        title={messages.title}
        subtitle={messages.subtitle}
      />
    </Container>
  </ContainerWithBackground>
);

Highlight.propTypes = propTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
