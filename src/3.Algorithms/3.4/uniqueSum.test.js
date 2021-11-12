import { uniqueSum } from './uniqueSum';

test('Умножение всех элементов массива', () => {
  expect(uniqueSum([1, 2, 3, 3, 2, 1])).toBe(6);
  expect(uniqueSum([1, 3, 8, 1, 8])).toBe(12);
  expect(uniqueSum([-1, -1, 5, 2, -7])).toBe(-1);
});
