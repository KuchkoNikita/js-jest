export const flattenAndSort = (arr) => {
  return arr.reduce((prev, item) => [...prev, ...item], []).sort((a, b) => a - b);
};
