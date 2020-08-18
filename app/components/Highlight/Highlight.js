import React from 'react';

import ContainerWithBackground from '@livipdev/core/ContainerWithBackground';
import Grid from '@livipdev/core/Grid';
import Title from '@livipdev/core/Title';
import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

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
      <Grid container justify="center" className={classes.content}>
        <Grid item xs={12} md={8} lg={8} xl={6}>
          <Title
            title={title}
            subtitle={subtitle}
            customClass={classes.title}
            maxWidth={SCREEN_SIZES.MEDIUM}
            marginBottom="3.75rem"
          />
          <HomeHighlightButtons events={response} />
        </Grid>
      </Grid>
    </ContainerWithBackground>
  );
};

Highlight.propTypes = propTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
