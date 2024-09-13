// const promise1 = Promise.resolve("done");
// const promise2 = Promise.resolve("completed");
// const promise3 = Promise.resolve("all clear");

// const result = Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function func1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("result from fun1"), 1000);
//   });
// }

// function func2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("result from fun2");
//     }, 1000);
//   });
// }

// function func3() {
//   return new Promise((resolve, reject) => resolve("result from fun3"), 1000);
// }

// Promise.all([func1(), func2(), func3()]).then((result) => console.log(result));

// async function getResult() {
//   let result1 = await func1();
//   let result2 = await func2();
//   let result3 = await func3();
//   console.log(result1, result2, result3);
// };

// getResult();

// const promise3 = new Promise((resolve, reject) => {
//     reject("heehhe");
// });
// const promise1 = new Promise((resolve, reject) => {
//   reject("done");
// });
// const promise2 = new Promise((resolve, reject) => {
//   reject("donedona");
// });

// Promise.allSettled([promise1, promise2,promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.any([promise3, promise1, promise2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("error while", error);
//   });

// const task1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Task 1 is completed");
//       resolve("result of task1");
//     }, 1000);
//   });
// };

// const task2 = (resultFromTask1) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Task 2 complete");
//       resolve(`${resultFromTask1} -> Result of Task 2`);
//     }, 1000);
//   });
// };

// const task3 = (resultFromTask2) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Task 3 complete");
//       resolve(`${resultFromTask2}`);
//     }, 1000);
//   });
// };

// task1()
//   .then((result) => task2(result))
//   .then((result) => task3(result))
//   .then((finalResult) => {
//     console.log("All tasks complete:", finalResult);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
