function countDigitsofaNumber(num) {
  let c = 0;
  num = Math.abs(num);
  while (num > 0) {
    c++;
    num = Math.floor(num / 10);
  }
  return c;
}

console.log(countDigitsofaNumber(-67));
