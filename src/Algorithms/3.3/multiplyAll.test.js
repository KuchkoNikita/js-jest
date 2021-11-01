import { multiplyAll } from './multiplyAll';

test('Умножение всех элементов массива', () => {
  expect(multiplyAll([1, 2, 3])(1)).toBe([1, 2, 3]);
  expect(multiplyAll([1, 2, 3])(2)).toBe([2, 4, 6]);
  expect(multiplyAll([1, 2, 3])(0)).toBe([0, 0, 0]);
});
