import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';
import ContainerWithBackground from '@livipdev/core/ContainerWithBackground';
import Title from '@livipdev/core/Title';
import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

const EventHighlight = ({ classes, description, background, title }) => {
  const titleText = {
    variant: 'h1',
    message: title,
  };
  const descriptionText = {
    variant: 'subtitle1',
    message: description,
  };

  return (
    <ContainerWithBackground
      background={background}
      cover
      backgroundDarkMask
    >
      <Box display="flex" justify="flex-start" alignItems={{ xs: 'center', md: 'flex-end' }} height="100%">
        <Title
          title={titleText}
          subtitle={descriptionText}
          customClass={classes.title}
          maxWidth={SCREEN_SIZES.MEDIUM}
        />
      </Box>
    </ContainerWithBackground>
  );
};

EventHighlight.propTypes = {
  background: PropTypes.string,
  classes: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default EventHighlight;
