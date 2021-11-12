import { spread } from './spread';
test('Распаковка аргументов', () => {
  expect(
    spread(
      function (x, y) {
        return x + y;
      },
      [1, 2]
    )
  ).toBe(3);
});
