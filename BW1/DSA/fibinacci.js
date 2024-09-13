// function printFibonacci(num) {
//   let a = 0,
//     b = 1;
//   for (let i = 0; i < num; i++) {
//     if (a < 11) {
//       console.log(a);
//     }
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// }

// printFibonacci(10);

function fibinacciNumbers(n) {
  if (n <= 1) return n;
  return fibinacciNumbers(n - 1) + fibinacciNumbers(n - 2);
}

function printFibinacci(num) {
  for (let i = 0; i < num; i++) {
    console.log(fibinacciNumbers(i));
  }
}

printFibinacci(10);
