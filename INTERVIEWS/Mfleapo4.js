const employee = [
  {
    name: "Mohan",
    designation: "Developer",
  },
  {
    name: "Avinash",
    designation: "QA",
  },

  {
    name: "Reema",
    designation: "Leader",
  },
  {
    name: "Tanya",
    designation: "Developer",
  },
  {
    name: "Ram",
    designation: "Developer",
  },
  {
    name: "Vikash",
    designation: "Leader",
  },
  {
    name: "Sanjay",
    designation: "QA",
  },
];

function sortBydesgnication(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (!result[arr[i].designation]) {
      result[arr[i].designation] = [];
    }
    result[arr[i].designation].push(arr[i].name);
  }
  return result;
}
console.log(sortBydesgnication(employee));
