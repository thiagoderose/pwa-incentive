import React from 'react';

import Carousel from '@livipdev/containers/Carousel';
import { VARIANTS as CAROUSEL_VARIANTS } from '@livipdev/containers/Carousel/constants';

import { buildSlides } from './builders';
import propTypes from './propTypes';

const FullwidthCarousel = ({ classes, slides }) => (
  <Carousel
    variant={CAROUSEL_VARIANTS.NAVIGATION_ON_RIGHT}
    customClasses={classes}
  >
    {buildSlides(slides)}
  </Carousel>
);

FullwidthCarousel.propTypes = propTypes;

export default FullwidthCarousel;
