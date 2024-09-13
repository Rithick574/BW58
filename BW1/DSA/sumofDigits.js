function sumOfAllDigits(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num/10)
  }
  return sum;
}

console.log(sumOfAllDigits(12345));
