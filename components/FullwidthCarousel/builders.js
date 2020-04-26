import React from 'react';
import Link from 'next/link';
import flow from 'lodash/flow';
import Button from '@livip/core/Button';
import Typography from '@livip/core/Typography';
import CarouselSlideContent from '@livip/core/CarouselSlideContent';
import { VARIANTS } from '@livip/core/CarouselSlideContent/constants';

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
  >
    <Link href={slide.link}>
      <Button variant="outlined">
        <Typography message={messages.link} />
      </Button>
    </Link>
  </CarouselSlideContent>
);

const buildSlideCategories = flow(normalizeCategories, mergeCategories);
