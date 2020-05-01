import React from 'react';
import Container from '@livip/core/Container';

import * as NewsletterAPI from '../../api/newsletter';
import NewsletterBanner from '../../components/NewsletterBanner';

const Newsletter = () => {
  const handleSubmit = (email) => NewsletterAPI.subscribe(email);

  return (
    <Container>
      <NewsletterBanner onSubmit={handleSubmit} />
    </Container>
  );
};

export default Newsletter;
