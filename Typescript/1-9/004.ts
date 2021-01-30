/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(n: number) {
  let reversedN = n.toString().split('').reverse().join('');
  return n.toString() == reversedN;
}

export default function problem004(n: number) {
  let largestPalindrome: number = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      let ijProduct = i * j;
      if (isPalindrome(ijProduct) && ijProduct > largestPalindrome) {
        largestPalindrome = ijProduct;
      }
    }
  }

  return largestPalindrome;
}