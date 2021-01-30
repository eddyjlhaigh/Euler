/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function isEvenlyDivisible(number: number, divisor: number) {
  if(number % divisor == 0) {
    return true;
  }

  return false;
}

function setupDivisors(n: number) {
  let arr: number[] = [];
  for (let i = 1; i <= n; i ++) {
    arr.push(i);
  }
  return arr;
}

export default function problem005(n: number) {
  let x = 1;
  let xIsDivisibleByN = false;
  let divisors: number[] = setupDivisors(n);

  while (true) {
    for (let d of divisors) {
      if (isEvenlyDivisible(x, d)) {
        xIsDivisibleByN = true;
      }
      else {
        xIsDivisibleByN = false;
        break;
      }
    }

    if(xIsDivisibleByN) {
      return x;
    }

    x += 1;
  }
}