import flow from 'lodash/flow';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';

export const selectAvailableCategories = (events) => flow(selectAllCategories, flatten, uniq)(events);

const selectAllCategories = (events) => events.map(selectEventCategories);

const selectEventCategories = (event) => event.categories;
