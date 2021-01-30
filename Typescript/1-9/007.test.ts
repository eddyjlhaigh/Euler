import problem007 from './007';

test('Euler Example Passes', () => {
  expect(problem007(6)).toEqual(13);
});

test('Euler Problem 007 Passes', () => {
  expect(problem007(10001)).toEqual(104743);
});