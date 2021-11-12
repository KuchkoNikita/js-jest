import { sumAverage } from './sumAverage';

test('Усредненная сумма массивов', () => {
  expect(
    sumAverage([
      [3, 4, 1, 3, 5, 1, 4],
      [21, 54, 33, 21, 77],
    ])
  ).toBe(44);
});
