// const property = "firstName";
// const name = "Rithick"

// const user = {
//     [property] : name
// }

// console.log(user.firstName);

// const user = {
//     name : "Rithick",
//     age:24,
//     isTotallyAwesome : true
// };

// for (key in user){
//     console.log(`${key} : ${user[key]}`);
// }

// const obj ={
//     a : "one",
//     b : "two",
//     a : "three"
// };

// console.log(obj);

// let nums = {
//     a : 100,
//     b : 200,
//     title : "My nums"
// };

// function multiplyByTwo(params){
//     for(let key in params){
//         if(typeof params[key] == "number"){
//             params[key] = params[key] *2;
//         }
//     }
//     return params;
// }


// console.log(multiplyByTwo(nums));



// const a = {}
// const b ={ key : "b"}
// const c = { key : "c"}

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// const user = {
//     name : "Rithick",
//     age:24
// };

// const a =JSON.stringify(user)
// console.log("🚀 ~ file: obj.js:63 ~ a:", a)
// const b = JSON.parse(a)
// console.log("🚀 ~ file: obj.js:64 ~ b:", b)

// const hello = '{"name":"Rithick","age":20}'
// console.log(JSON.parse(hello));


// const settings ={
//     username : "Rithick",
//     level : 19,
//     health : 90
// };

// const data = JSON.stringify(settings,["level"]);
// console.log(data);


// const shape = {
//     radius: 10,
//     diameter(){
//         return this.radius * 2;
//     },
//     perimeter:() => 2* Math.PI * this.radius,
//     peri : function(){
//         return (()=> 2 * Math.PI * this.radius).call(this)
//     }
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());
// console.log(shape.peri());


// let c = { greeting : "Hey!"};
// let d;

// d=JSON.parse(JSON.stringify(c));
// c.greeting = "hello"
// console.log(d.greeting);


let person = {name : "Lydia"};
const members = [person];
person.name = null;
console.log(members);