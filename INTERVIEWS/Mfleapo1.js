const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// Given a nested array of varying depths, write a function to flatten it.

function flatArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flat = flatArray(arr[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

const flatArr = flatArray(nestedArray);
console.log(flatArr);
