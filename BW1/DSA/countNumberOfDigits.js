function countDigitsofaNumber(num) {
  let count = 0;
  let n = Math.abs(num);
  
  do {
    count++;
    n = Math.floor(n / 10);
  } while (n > 0);
  return count;
}

console.log(countDigitsofaNumber(-1231234912344567));
