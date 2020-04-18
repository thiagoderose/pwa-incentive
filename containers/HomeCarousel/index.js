import React from 'react';

import Carousel from '@livip/containers/Carousel';
import { Olympics, WorldCup } from '../../components/Slides';

const HomeCarousel = () => (
  <Carousel>
    <Olympics />
    <WorldCup />
  </Carousel>
);

export default HomeCarousel;
