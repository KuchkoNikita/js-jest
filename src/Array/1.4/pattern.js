export const pattern = (amount) => {
  return new Array(amount)
    .fill()
    .map((_, i) => {
      return i + 1;
    })
    .reduce((acum, item, i, arr) => {
      acum.push(arr.slice(i, arr.lenght).join('') + arr.slice(0, i).join(''));
      return acum;
    }, [])
    .join(' ');
};
