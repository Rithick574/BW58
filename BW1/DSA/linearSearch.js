const arr = [1, 2, 6, 9, 0, -5];

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(arr, 9));
console.log(arr.includes(9));
console.log(arr.indexOf(9));
console.log(arr.find((x) => x > 0));