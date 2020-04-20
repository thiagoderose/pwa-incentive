import React from 'react';
import flow from 'lodash/flow';
import CarouselSlideContent from '@livip/core/CarouselSlideContent';
import { VARIANTS } from '@livip/core/CarouselSlideContent/constants';

import {
  normalizeCategories,
  mergeCategories,
} from './transformers';

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
  />
);

const buildSlideCategories = flow(normalizeCategories, mergeCategories);
