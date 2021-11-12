export const sequenceSum = (begin, end, step) => {
  return begin <= end ? begin + sequenceSum(begin + step, end, step) : 0;
};
