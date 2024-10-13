// Finding All Pairs with a Given Sum

// // Example usage const numbers = [2, 4, 3, 5, 7, 8, 9];
// const targetSum = 10;
// console.log(findPairsWithSum(numbers, targetSum)); // Output: [[3, 7], [2, 8], [5, 5]];

function findPairsWithSum(arr, target) {
  let set = new Set();
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    let balance = target - arr[i];
    if (set.has(balance)) {
      pairs.push([balance, arr[i]]);
    }
    set.add(arr[i]);
  }
  let addSame = target / 2;
  if (arr.includes(addSame)) {
    pairs.push([addSame, addSame]);
  }
  return pairs;
}

const numbers = [2, 4, 3, 5, 7, 8, 9];
const targetSum = 10;
console.log(findPairsWithSum(numbers, targetSum));
