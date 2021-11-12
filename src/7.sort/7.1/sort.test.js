import { sortList } from './sort';

const obj = [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
];

test('Умножение всех элементов массива', () => {
  expect(sortList(obj, 'a')).toStrictEqual([
    { a: 4, b: 12 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 1, b: 3 },
  ]);
});
