function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 9];
let target = 4;
const index = binarySearch(arr, target);
console.log(index);