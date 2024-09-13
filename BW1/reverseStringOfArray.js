const abc = ["rithick", "anirudh"];

function reverseInPlace(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// console.log(reverseInPlace(abc));

function reverse(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  // return arr;
}
reverse(abc)
console.log(abc);
