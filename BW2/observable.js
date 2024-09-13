const { Observable } = require('rxjs');

const simpleObserver = new Observable((observer)=>{
    observer.next("hello observer");
    observer.next("observer is emitting another value");
    observer.complete();
});

simpleObserver.subscribe({
    next:(value)=>console.log(value),
    complete:()=>console.log("observable complete")
});


// const hello = (callback) => {
//   console.log("hello world");
//   callback()
// };

// const world = (callback) => {
//   console.log("world hello");
//   callback();
// };

// thenAgain=(callback)=>{
//     console.log("Step 3 completed");
//     callback()
// }

// hello(() => {
//   world(() => {
//     thenAgain(() => {
//       console.log("all steps Done");
//     });
//   });
// });
