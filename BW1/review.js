// function outer(){
//     let a=10;
//     return function inner(){
//         console.log(a);
//         console.log(b);
//         return function(){
//             let b=9;
//         }
//     }
// }

// outer()();

// const objA = {
//   name: "Rithick",
//   age: 23,
//   greeting: function () {
//     console.log(`hi my name is ${this.name} and age is ${this.age}`);
//   },
// };
// const objB = {
//   name: "shihad",
//   age: 24,
// };

// objA.greeting.call(objB);
// objA.greeting.apply(objB);
// const greets = objA.greeting.bind(objB);
// greets();

// function a(){
  
// }
// function b(){

// }
// a(()=>{
//   b(()=>{

//   })
// });


// objB.call(objA.greeting("shihad", 24));

// const promiseOne = new Promise((resolve, reject) => {});

// const promiseTwo = new Promise((resolve, reject) => {});

// Promise.any([promiseOne, promiseTwo])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//   Promise.race([promiseOne, promiseTwo])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const arr = ["rithick", "rahul", "arjun", "shihad"];


// function toCharcode(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let spl = arr[i].split("");
//         console.log(spl);
//         let sum = 0;
//         for (let j = 0; j < spl.length; i++) {
//           sum += spl[i].charCodeAt(j);
//         }
//         console.log(sum);
//       }
// }


// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   };
//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shi());
//     }
//   }
//   return [...result, ...left, ...right];
// }

// const result = mergeSort(arr);
// console.log("🚀 ~ file: review.js:89 ~ result:", result)

// function binarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }

// const arr = [1, 2, 3, 4, 5, 6];
// const target = 4;
// let ends = arr.length - 1;
// const result = binarySearch(arr, target);
// console.log("🚀 ~ file: review.js:115 ~ result:", result);