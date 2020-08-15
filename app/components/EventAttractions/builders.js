export const buildBestAttractions = (raw) => (
  raw.map(attraction => ({
    id: attraction.id,
    title: attraction.name,
    background: attraction.cover_url,
    description: attraction.tags.map(tag => `#${tag}`).join(' '),
  }))
);
