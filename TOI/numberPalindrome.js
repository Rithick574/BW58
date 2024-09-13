function palindrome(num) {
  let reversed = 0;
  let reminder;
  let original = num;
  while (num > 0) {
    reminder = num % 10;
    reversed = reversed * 10 + reminder;
    num = Math.floor(num / 10);
  }
  return reversed === original;
}

console.log(palindrome(1234321));
