export const uniqueSum = (arr) => {
  return arr
    .reduce((newArr, item) => {
      return newArr.includes(item) ? newArr : [...newArr, item];
    }, [])
    .reduce((sum, item) => sum + item);
};
