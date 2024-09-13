const hashTable = new Map();

const arr = [1, 2, 3, 4, 2, 2, 1, 3, 4, 5, 6, 6];

function removeDuplicate(arr) {
  const unique = [];
  arr.forEach((element) => {
    if (!hashTable.has(element)) {
      hashTable.set(element, true);
      unique.push(element);
    }
  });
  return unique;
}

const result = removeDuplicate(arr);
console.log(result);

for (const [key, value] of hashTable.entries()) {
  console.log(`${key} : ${value}`);
}
