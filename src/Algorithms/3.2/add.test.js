import { add } from './add';

test('Функциональное сложение', () => {
  expect(add(1)(3)).toBe(4);
  expect(add(4)(6)).toBe(10);
});
