import React from 'react';
import Link from 'next/link';
import flow from 'lodash/flow';
import Button from '@livipdev/core/Button';
import Typography from '@livipdev/core/Typography';
import CarouselSlideContent from '@livipdev/core/CarouselSlideContent';
import { VARIANTS } from '@livipdev/core/CarouselSlideContent/constants';

import {
  normalizeCategories,
  mergeCategories,
} from './transformers';

import messages from './messages';

export const buildSlides = (slides) => (
  slides.map(buildSingleSlide)
);

const buildSingleSlide = (slide) => (
  <CarouselSlideContent
    variant={VARIANTS.ALIGNED_TO_LEFT}
    title={slide.name}
    subtitle={slide.description}
    suptitle={buildSlideCategories(slide.categories)}
    background={slide.img}
    backgroundDarkMask
  >
    {/* <Link> */}
      <Button variant="outlined" href={slide.link}>
        <Typography message={messages.link} />
      </Button>
    {/* </Link> */}
  </CarouselSlideContent>
);

const buildSlideCategories = flow(normalizeCategories, mergeCategories);
