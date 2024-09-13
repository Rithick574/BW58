function sumofNaturalNumbers(num) {
  return (num * (num + 1)) / 2;
}

console.log(sumofNaturalNumbers(10));

function usingForLoop(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(usingForLoop(10));
