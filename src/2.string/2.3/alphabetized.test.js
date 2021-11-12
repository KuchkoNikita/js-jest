import { alphabetized } from './alphabetized';

test('Алфавитизация', () => {
  expect(alphabetized('Hello!!!!!!!!!!!')).toBe('eHllo');
  expect(alphabetized('The Holy Bible.')).toBe('BbeehHilloTy');
});
