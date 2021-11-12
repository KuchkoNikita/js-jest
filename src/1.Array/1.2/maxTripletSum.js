export const maxTripletSum = (arr) => {
  const result = arr
    .reduce((newArr, item) => {
      return newArr.includes(item) ? newArr : [...newArr, item];
    }, [])
    .sort()
    .slice(-3)
    .reduce((sum, item) => (sum += item));
  return result;
};
