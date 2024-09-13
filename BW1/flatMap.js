let ab = [
  { ab: [12, 23, 13, 9], bc: 12 },
  { abc: [0, 7, 10, 6], bcd: 13 },
  { abcd: [1, 6, 99, 100], bcde: 62 },
];

const even = ab
  .flatMap((x) => Object.values(x))
  .flat()
  .filter((y) => y % 2 == 0);
console.log(even);
