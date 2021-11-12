import { zipWith } from './zipWith';

test('Умножение всех элементов массива', () => {
  expect(zipWith((a, b) => a + b, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1])).toStrictEqual([
    6, 6, 6, 6, 6,
  ]);
  expect(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])).toStrictEqual([1, 10, 100, 1000]);
  expect(zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3])).toStrictEqual([0, 2, 4, 6]);
});
