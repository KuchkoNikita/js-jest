import { toMachineName } from './toMachineName';

test('Машиночитаемые имена', () => {
  expect(toMachineName('1. Hello, my name is Andrew', '-')).toBe('hello-my-name-is-andrew');
});
