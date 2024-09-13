// let c = 0;
// function* multiples(num){
//     while(true){
//         c++;
//         yield num*c;
//     }
// };

// console.log(multiples(2).next().value)
// console.log(multiples(2).next().value)
// console.log(multiples(2).next().value)

// function timer() {
//   const interval = setInterval(() => {
//     if (c == 10) {
//         clearInterval(interval);
//       }
//     console.log(c);
//     c++;
//   }, 1000);

// }
// timer();

// const arr = [1, 2, 3, 4, 5];

// arr.splice(3,0,6);
// console.log(arr);

// const result = arr.reduce((acc, curr) => {
//   if (curr > 3) {
//     acc += curr;
//   }
//   return acc;
// }, 0);

// console.log(result);

// function outer() {
//   let a = 10;
//   (() => {
//     console.log(a);
//   })();
// }
// outer();

// const hello = true ? a : b;

// const a=[[1,2,3],[1,2],[8,6,5,4,3]];

// class Node {
//   constructor(value,next=null) {
//     this.data = value;
//     this.next = next;
//   }
// };

// function reverse(head) {
//   let prev = null;
//   let curr = head;
//   let next;
//   while (curr) {
//     next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   };
//   return prev;
// }
// function printList(head) {
//   console.log(head);
//   let curr = head;
//   while (curr) {
//     console.log(curr.data);
//     curr = curr.next;
//   }
// };

// const listNodes = new Node(1, new Node(2, new Node(3, new Node(4))));
// const a = reverse(listNodes);
// printList(a);


// const arr = [5, 6, 2, 7, 5, 8];

// function quickSort(arr) {
//   if (arr.length <= 2) {
//     return arr;
//   }
//   let left = [];
//   let right = [];
//   let pivot = arr[arr.length - 1];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log(quickSort(arr));
