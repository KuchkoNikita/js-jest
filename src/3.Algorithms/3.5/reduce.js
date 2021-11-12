export const reduce = (arr, callback, initialValue) => {
  let accum = 1;
  initialValue ? (accum = initialValue) : arr[0];
  arr.forEach((item) => {
    accum = callback(accum, item);
  });
  return accum;
};
