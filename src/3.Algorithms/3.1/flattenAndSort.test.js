import { flattenAndSort } from './flattenAndSort';

test('Умножение всех элементов массива', () => {
  expect(flattenAndSort([])).toStrictEqual([]);
  expect(flattenAndSort([[], []])).toStrictEqual([]);
  expect(flattenAndSort([[], [1]])).toStrictEqual([1]);
  expect(
    flattenAndSort([
      [3, 2, 1],
      [7, 9, 8],
      [6, 4, 5],
    ])
  ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).toStrictEqual([1, 2, 3, 4, 5, 6, 100]);
});
