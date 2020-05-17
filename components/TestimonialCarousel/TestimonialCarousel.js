import React from 'react';
import PropTypes from 'prop-types';

import Carousel from '@livip/containers/Carousel';
import { VARIANTS as CAROUSEL_VARIANTS } from '@livip/containers/Carousel/constants';

import Testimonial from '../Testimonial';

const TestimonialCarousel = ({ classes, testimonials }) => (
  <Carousel
    variant={CAROUSEL_VARIANTS.NAVIGATION_ON_RIGHT}
    customClasses={classes}
    bullets={false}
  >
    {testimonials.map((testimonial) => <Testimonial {...testimonial} />)}
  </Carousel>
);

TestimonialCarousel.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  testimonials: PropTypes.arrayOf(PropTypes.object),
};

export default TestimonialCarousel;
