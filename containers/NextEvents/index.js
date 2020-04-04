import React from 'react';
import Container from '@livip/core/Container';
import Title from '@livip/core/Title';

import messages from './messages';

const NextEvents = () => {
  const title = {
    variant: 'h2',
    message: messages.title,
  };
  const subtitle = {
    variant: 'subtitle2',
    message: messages.subtitle,
  };

  return (
    <Container>
      <Title
        title={title}
        subtitle={subtitle}
        maxWidth='sm'
      />
    </Container>
    );
};

export default NextEvents;
