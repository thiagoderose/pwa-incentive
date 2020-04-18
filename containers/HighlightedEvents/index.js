import React from 'react';
import Container from '@livip/core/Container';

import FullwidthCarousel from '../../components/FullwidthCarousel';

import { response } from './mockedAPI';

const HighlitedEvents = () => (
  <Container
    maxWidth={false}
    disableGutters
  >
    <FullwidthCarousel slides={response} />
  </Container>
);

export default HighlitedEvents;
