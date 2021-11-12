export const compose =
  (...func) =>
  (x) =>
    func.reduceRight((acum, fn) => fn(acum), x);
