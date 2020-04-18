import React from 'react';

import Carousel from '@livip/containers/Carousel';
import { VARIANTS as CAROUSEL_VARIANTS } from '@livip/containers/Carousel/constants';

import { buildSlides } from './builders';
import propTypes from './propTypes';

const FullwidthCarousel = ({ slides }) => (
  <Carousel variant={CAROUSEL_VARIANTS.NAVIGATION_ON_RIGHT}>
    {buildSlides(slides)}
  </Carousel>
);

FullwidthCarousel.propTypes = propTypes;

export default FullwidthCarousel;
