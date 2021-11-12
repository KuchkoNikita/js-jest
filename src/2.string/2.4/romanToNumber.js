export const romanToNumber = (number) => {
  const roman = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  return Array.from(number)
    .map((el) => roman[el])
    .reduce((num, item, i, arr) => {
      return item < arr[i + 1] ? num - item : num + item;
    }, 0);
};
