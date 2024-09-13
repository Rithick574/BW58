const arr = [5, 9, 2, 45, 6, 1, 7,5,5,5,5,5,5,5, 8, 9];
const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  };
  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
};

console.log(quicksort(arr));
