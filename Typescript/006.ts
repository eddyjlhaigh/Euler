/*
The sum of the squares of the first ten natural numbers is,

  1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,

  (1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is,

  3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function square(n: number) {
  return n * n;
}

function sumOfSquares(n: number) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += square(i);
  }

  return result;
}

function squareOfSum(n: number) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return square(sum);
}

export default function problem006(n: number) {
  return squareOfSum(n) - sumOfSquares(n);
}