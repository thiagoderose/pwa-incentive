import React from 'react';

import Testimonial from '../Testimonial';

const TestimonialCarousel = (props) => {
  const data = props.testimonials[0];
  return (
    <Testimonial {...data} />
  );
};

export default TestimonialCarousel;
