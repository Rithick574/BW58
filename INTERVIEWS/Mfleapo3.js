const students = [
  { name: "John", grades: [70, 80, 90] },
  { name: "Jane", grades: [60, 65, 70] },
  { name: "Jim", grades: [85, 90, 95] },
  { name: "Jill", grades: [50, 55, 60] },
];
//find out the student name whose average grade is greater than 75

function getAverage(arr) {
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  return total / arr.length;
}

const result = students
  .filter((x) => getAverage(x.grades) > 75)
  .map((x) => x.name);

console.log(result);
