import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

export const selectColsBasedOnViewport = (defaultColumns, viewport) => {
  const viewportsCols = {
    [SCREEN_SIZES.EXTRA_LARGE]: defaultColumns,
    [SCREEN_SIZES.LARGE]: defaultColumns,
    [SCREEN_SIZES.MEDIUM]: decreaseCols(defaultColumns, 1),
    [SCREEN_SIZES.SMALL]: decreaseCols(defaultColumns, 2),
    [SCREEN_SIZES.EXTRA_SMALL]: decreaseCols(defaultColumns, 3),
  };

  return viewportsCols[viewport];
};

const decreaseCols = (base, delta, min=1) => {
  const decreased = base - delta;

  return (
    decreased >= min
      ? decreased
      : min
  );
};

export const selectSpaceBasedOnViewport = (theme, viewport) => {
  const viewportsSpaces = {
    [SCREEN_SIZES.EXTRA_LARGE]: theme.spaces.loose.value,
    [SCREEN_SIZES.LARGE]: theme.spaces.loose.value,
    [SCREEN_SIZES.MEDIUM]: theme.spaces.loose.value,
    [SCREEN_SIZES.SMALL]: 0,
    [SCREEN_SIZES.EXTRA_SMALL]: 0,
  };

  return viewportsSpaces[viewport];
};
