import problem003 from './003';

test('Euler Example Passes', () => {
  expect(problem003(13195)).toEqual(29);
});

test('Euler Problem 002 Passes', () => {
  expect(problem003(600851475143)).toEqual(6857);
});