// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 },
// ];



// function reArrange(obj) {
//   const age = new Map();
//   for (const x of obj) {
//     if (!age.has(x.age)) {
//       age.set(x.age, []);
//     }
//     age.get(x.age).push(x.name);
//   }
//   const result = Object.fromEntries(age);
//   return result;
// }

// console.log(reArrange(people));



// const result = people.reduce((acc, curr) => {
//   if (!acc[curr.age]) {
//     acc[curr.age] = [];
//   };
//   acc[curr.age].push(curr.name);
//   return acc;
// }, {});

// console.log(result);
