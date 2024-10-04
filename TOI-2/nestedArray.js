function createArray(depth) {
  let arr = [];
  function makeSize(arr, depth) {
    if (depth === 1) {
      arr.push(Math.floor(Math.random() * 10));
    } else {
      for (let i = 0; i < depth; i++) {
        arr[i] = [];
        return makeSize(arr[i], depth - 1);
      }
    }
  }
  makeSize(arr, depth);
  return arr;
}

console.log("1D array:", createArray(1));
console.log("2D array:", createArray(2));
console.log("3D array:", createArray(4));
