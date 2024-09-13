function palindrome(n) {
  let original = n;
  let reminder;
  let reversed = 0;
  while (n > 0) {
    reminder = n % 10;
    reversed = reversed * 10 + reminder;
    n = Math.floor(n / 10);
  }
  return reversed === original;
}

console.log(palindrome(1234321));
