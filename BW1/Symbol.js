const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2);

console.log(value1.description === value2.description);

const x = Symbol();

console.log(typeof x);

console.log(value1.description);

let id = Symbol("id")

let person = {
    name : "Jack",
    age : 25,
    [id] : 12
}
console.log("🚀 ~ file: Symbol.js:21 ~ person:", person)

//for in loop  doesnt work
for(let key in person){
    console.log(person[key]);
}