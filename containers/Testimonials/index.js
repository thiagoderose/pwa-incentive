import React from 'react';
import Container from '@livip/core/Container';

import TestimonialCarousel from '../../components/TestimonialCarousel';
import response from './mockedAPI';

const Testimonials = () => (
  <Container>
    <TestimonialCarousel testimonials={response} />
  </Container>
);

export default Testimonials;
