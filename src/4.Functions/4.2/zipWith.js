export const zipWith = (func, a0, a1) => {
  return (a1.length > a0.length ? a0 : a1).map((_, i) => func(a0[i], a1[i]));
};
