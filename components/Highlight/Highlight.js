import React from 'react';
import ContainerWithBackground from '@livip/core/ContainerWithBackground';
import Container from '@livip/core/Container';
import Title from '@livip/core/Title';
import { SCREEN_SIZES } from '@livip/core/styles/theme/constants';

import HomeHighlightButtons from '../HomeHighlightButtons';

import messages from './messages';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import { response } from './mockedAPI';

const Highlight = ({ classes, background, variant }) => {
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
        customClass={classes.title}
        maxWidth={SCREEN_SIZES.MEDIUM}
      />
      <HomeHighlightButtons events={response} />
    </ContainerWithBackground>
  );
};

Highlight.propTypes = propTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
