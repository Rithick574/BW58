const obj = {
  "1key1": 1234,
  key2: 5678,
  "4key3": 9012,
  k5ey4: 3456,
  "1key5": 7890,
  key6: 2345,
  key7: 6789,
};

function removeOdd(obj) {
  for (let x in obj) {
    let value = obj[x];
    let key = "";
    for (let y of x) {
      if (!isNaN(y)) {
        if (y % 2 == 0) {
          key += y;
        }
      } else {
        key += y;
      }
    }
    delete obj[x];
    obj[key] = value;
  }
  return obj;
}

console.log(removeOdd(obj));
