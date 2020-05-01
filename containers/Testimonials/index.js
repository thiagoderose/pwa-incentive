import React from 'react';

import Container from '@livip/core/Container';
import Title from '@livip/core/Title';
import { SCREEN_SIZES } from '@livip/core/styles/theme/constants';

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
