const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function reverseArray(arr) {
//   let reversedArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   return reversedArray;
// }

function reverseArray(arr) {
  if (arr.length == 0) {
    return [];
  }
  // return [arr.pop(), ...reverseArray(arr)];
  return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, -1)));
}
const result = reverseArray(arr);
console.log(result);
