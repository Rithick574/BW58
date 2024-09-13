let arr = [];
function createArray(size) {
  function fillArray(current, depth) {
    if (depth === 1) {
      current.push(Math.floor(Math.random() * 10));
    } else {
      for (let i = 0; i < depth; i++) {
        current[i] = [];
        fillArray(current[i], depth - 1);
      }
    }
  }
  fillArray(arr, size);
  return arr;
}

console.log("1D array:", createArray(1));
console.log("2D array:", createArray(2));
console.log("3D array:", createArray(4));
