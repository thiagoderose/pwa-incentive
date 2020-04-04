import React from 'react';
import ContainerWithBackground from '@livip/core/ContainerWithBackground';
import Container from '@livip/core/Container';
import Title from '@livip/core/Title';

import HomeHighlightButtons from '../../components/HomeHighlightButtons';

import messages from './messages';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import { response } from './mockedAPI';

const Highlight = ({ background, variant }) => {
  const title = {
    variant: 'h1',
    message: messages.title,
  };
  const subtitle = {
    variant: 'subtitle1',
    message: messages.subtitle,
  };


  return (
    <ContainerWithBackground
      background={background}
      variant={variant}
    >
      <Title
        title={title}
        subtitle={subtitle}
        maxWidth='md'
      />
      <HomeHighlightButtons events={response} />
    </ContainerWithBackground>
  );
};

Highlight.propTypes = propTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
