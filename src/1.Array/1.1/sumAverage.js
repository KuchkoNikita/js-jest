export const sumAverage = (arr) => {
  let result = 0;
  arr.forEach((item) => {
    result += item.reduce((sum, item) => sum + item) / item.length;
  });
  return Math.floor(result);
};
