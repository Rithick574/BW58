// curring in javascript
// f(a,b) into f(a)(b)

// function f(a){
//     return function(b){
//         return a+b
//        }
// };

// console.log(f(5)(3));

// function evaluate(operation){
// return function (a){
//     return function (b){
//         if(operation === "sum") return a+b;
//         else if (operation === "mul") return a*b;
//         else if (operation === "div") return a/b;
//         else if (operation === "sub") return a-b;
//         else return "invalid Operation"
//     }
// }
// };

// console.log(evaluate("sum")(20)(10))
// console.log(evaluate("sub")(20)(10))
// console.log(evaluate("mul")(20)(10))
// console.log(evaluate("div")(20)(10))

// infinite curring

function add(a) {
  return function (b) {
    if(b) return add(a+b);
    return a;
  };
}

console.log(add(5)(2)(7)(4)());


