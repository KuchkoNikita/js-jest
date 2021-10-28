import { replaceWithAlphPositions } from './replaceWithAlphPositions';

test('Замена букв на их позиции', () => {
  expect(replaceWithAlphPositions('The sunset sets at twelve o’clock.')).toBe(
    '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
  );
  expect(replaceWithAlphPositions('Algorithms and')).toBe('1 12 7 15 18 9 20 8 13 19 1 14 4');
});
