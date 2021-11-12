import { countDuplicates } from './countDuplicates';

test('Счетчик дубликатов', () => {
  expect(countDuplicates('abcde')).toBe(0);
  expect(countDuplicates('aabbcde')).toBe(2);
  expect(countDuplicates('aabBcde')).toBe(2);
  expect(countDuplicates('indivisibility')).toBe(1);
  expect(countDuplicates('aA11')).toBe(2);
});
