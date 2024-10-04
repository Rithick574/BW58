// let num = 101;
// function* printNum() {
//   while (num > 0) {
//     i--;
//     return yield num;
//   }
// }

// for (let i = 100; i >= 1; i--) {
//   setInterval(() => {
//     console.log(printNum().next.value);
//   }, 1000);
// }

// const promise1 = Promise.resolve("done");
// const promise2 = Promise.resolve("completed");
// const promise3 = Promise.resolve("clear");

// const result = Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function hello(cb) {
//   console.log("here");
//   cb();
// }
// function cb() {
//   console.log("hello world");
// }
// hello(cb);

// const arr = [1, 2, 1, 2, 1, 1, 1, 1, 1, 0, 4, 0, 9, 1, 2, 34, 45, 67];

// function findTheLastOccuredindex(arr, target) {
//   console.log(arr.lastIndexOf(target));
// }

// findTheLastOccuredindex(arr, 1);

// const arrary=[1,2,4,[5,6],8];
// const result = [2,4,8,10,12,16]

// function h(arrary){
// const newArray = arrary.flat().flatMap((x)=>x*2);
// console.log("🚀 ~ file: review.js:55 ~ h ~ newArray:", newArray)
// };

// h(arrary);
