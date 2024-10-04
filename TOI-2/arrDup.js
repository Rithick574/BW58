function removeAllDuplicates(arr) {
  const map = new Map();
  let result = [];
  for (let x of arr) {
    if (map.get(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 1);
    }
  }
  for (let x of arr) {
    if (map.get(x) === 1) {
      result.push(x);
    }
  }
  return result;
}

const input = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const ans = removeAllDuplicates(input);
console.log(ans);
