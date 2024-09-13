function outerFunction() {
  console.log("Outer Function Start");
  let a = 90;
  (function innerIIFE() {
    console.log("Inside IIFE", a);
  })();
  console.log("Outer Function End");
}

outerFunction();


let x = 5
let y = 10
let z = x + y
const a =[1, 2, 3]
a.forEach(num => console.log(num))
