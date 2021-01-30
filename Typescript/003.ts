/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function isPrime(n: number) {
  // All numbers are divisible by 1 so skip
  // All numbers that are not prime are divisible by a number less than their square root
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      // Is divisible, therefore not a prime
      return false;
    }
  }

  // No factors found, therefore number is prime
  return true;
}

function getFactors(n: number, factors: number[] = []) {  
  if (isPrime(n)) {
    factors = [1, n];
    return factors;
  }

  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (isPrime(i)) {
        // Prime factors are added to the array
        factors.push(i);
      }
      else {
        // Recursion if a non-prime factor is found
        getFactors(i, factors)
      }
    }
  }

  return factors.sort((a,b) => a-b);;
}

export default function problem003(n: number) {
  let factors: number[] = getFactors(n);
  return factors[factors.length - 1];
}