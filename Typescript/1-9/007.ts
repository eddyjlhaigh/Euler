/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function isPrime(n: number) {
  // All numbers are divisible by 1 so skip
  // All numbers that are not prime are divisible by a number less than their square root

  // Catch edge cases
  if (n <= 0) {
    return false;
  }

  if (n == 1) {
    return true;
  }

  // Check if the number is even
  if (n % 2 == 0) {
    return false;
  }

  // And then only check against odd numbers
  for(let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) {
      // Is divisible, therefore not a prime
      return false;
    }
  }

  // No factors found, therefore number is prime
  return true;
}

export default function problem007(n: number) {
  let primes: number[] = [2];
  let i = 3;

  while (primes.length < n) {
    if (isPrime(i)) {
      primes.push(i);
    }

    i += 2;
  }

  return primes[primes.length - 1];
}