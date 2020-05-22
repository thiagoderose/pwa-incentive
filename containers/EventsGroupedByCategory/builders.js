export const buildCategoryEvents = (events, category) => (
  events.filter((event) => event.categories.includes(category))
);
