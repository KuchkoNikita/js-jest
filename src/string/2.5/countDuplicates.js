export const countDuplicates = (text) => {
  const obj = {};
  text
    .toLowerCase()
    .split('')
    .forEach((item, i) => {
      !obj[item] ? (obj[item] = 1) : obj[item]++;
    });
  return Object.values(obj).reduce((acum, item) => {
    if (item > 1) return acum + 1;
    else return acum;
  }, 0);
};
