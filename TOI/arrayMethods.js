const fruits = ["Banana", "Orange", "Apple", "Mango"];

let size = fruits.lastIndexOf("Mango");
// console.log(size);
let a = fruits.indexOf("Orange");
// console.log(a);

let b = fruits.toString();
// console.log(b);

let c = fruits.at(2);
// console.log(c)

let d = fruits.join(" * ")
// console.log(d)

let fruit = fruits.unshift("hello");
// console.log(fruit)
// delete fruits[0];
// fruits[0] = "abcd"
// console.log(fruits);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = myGirls.concat(myBoys,arr3,"peter");
console.log( myChildren)
