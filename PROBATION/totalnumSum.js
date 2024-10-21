const ab = [
  { a: 3, pl: [5, 34, -93] },
  { a: -3, pl: [5, -34, -93] },
  { a: 33, pl: [35, -34, -93] },
];

function totalSum(obj) {
  let result = 0;
  obj.forEach((x) => {
      result += x.a;
      x.pl.forEach((y)=>result+=y)
  });
  return result;
}

console.log(totalSum(ab));

