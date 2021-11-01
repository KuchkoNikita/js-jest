import { romanToNumber } from './romanToNumber';

test('Декодирование римских цифр', () => {
  expect(romanToNumber('XIX')).toBe(19);
  expect(romanToNumber('IV')).toBe(4);
  expect(romanToNumber('XXI')).toBe(21);
  expect(romanToNumber('MDCLXVI')).toBe(1666);
  expect(romanToNumber('MMIII')).toBe(2003);
});
