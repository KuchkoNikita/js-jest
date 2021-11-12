import { arithmeticSequenceSum } from './diagonalSum';

test('Диагональная сумма матрицы', () => {
  expect(arithmeticSequenceSum(2, 3, 5).toBe(40));
});
