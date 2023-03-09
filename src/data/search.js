import ALL_EMOJIS from './ALL_EMOJIS.json';

export const search = (query, limit) => {
  return ALL_EMOJIS.slice(0, limit);
};