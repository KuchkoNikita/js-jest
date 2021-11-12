export const formatCurrency = (amount) => {
  return (Math.floor(parseFloat(amount) * 100) / 100)
    .toString()
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};
