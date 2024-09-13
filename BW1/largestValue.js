function getMaxDigit(number) {
  let max = Number.MIN_SAFE_INTEGER;
  while (number) {
    let div = number % 10;
    if (max < div) {
      max = div;
    }
    number = Math.floor(number/10);
  }
  return max;
}

let number = 104384738;
console.log(getMaxDigit(number));
