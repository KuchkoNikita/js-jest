import { reduce } from './reduce';

test('Reduce', () => {
  expect(reduce([1, 2, 3, 4], (acc, value) => acc * value, 2)).toBe(48);
  expect(reduce([1, 2, 3, 4], (acc, value) => acc * value)).toBe(24);
});
