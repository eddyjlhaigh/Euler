import problem004 from './004';

test('Euler Example Passes', () => {
  expect(problem004(99)).toEqual(9009);
});

test('Euler Problem 004 Passes', () => {
  expect(problem004(999)).toEqual(906609);
});