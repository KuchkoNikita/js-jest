export const arithmeticSequenceSum = (a, r, n) => {
  return new Array(n).fill(a).reduce((sum, item, i) => (sum += item + r * i));
};
