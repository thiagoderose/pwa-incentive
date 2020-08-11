import React from 'react';

import Container from '@livipdev/core/Container';
import Title from '@livipdev/core/Title';
import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

import TestimonialCarousel from '../../components/TestimonialCarousel';
import messages from './messages';
import { response } from './mockedAPI';

const Testimonials = () => {
  const title = {
    variant: 'h2',
    message: messages.title,
  };

  return (
    <Container>
      <Title
        title={title}
        maxWidth={SCREEN_SIZES.SMALL}
        align="center"
      />
      <TestimonialCarousel testimonials={response} />
    </Container>
  );
};

export default Testimonials;
