import React from 'react';
import Container from '@livipdev/core/Container';
import Title from '@livipdev/core/Title';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const EventBlock = ({ category }) => {
  const title = {
    variant: 'h3',
    message: category,
  };

  return (
    <Container>
      <Title
        title={title}
        align="center"
      />
    </Container>
  );
};

EventBlock.propTypes = propTypes;
EventBlock.defaultProps = defaultProps;

export default EventBlock;
