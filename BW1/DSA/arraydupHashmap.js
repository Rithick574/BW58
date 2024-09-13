function removeAllDuplicates(num) {
  let countMap = new Map();
  let result = [];
  for (const x of num) {
    countMap.set(x, (countMap.get(x) || 0) + 1);
  }
  for (const x of num) {
    if (countMap.get(x) === 1) {
      result.push(x);
    }
  }
  return result.join("");
}

const input = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const ans = removeAllDuplicates(input);
console.log(ans);
