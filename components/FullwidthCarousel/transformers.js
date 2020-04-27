import startCase from 'lodash/startCase';

import { CATEGORY_DELIMITER } from './constants';

export const normalizeCategories = (categories) => (
  categories.map(startCase)
);

export const mergeCategories = (categories, delimiter = CATEGORY_DELIMITER) => (
  categories.join(delimiter)
);
