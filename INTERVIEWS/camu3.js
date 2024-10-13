// 2)
const aStudMarks = [
  { name: "John", id: 1, subjCode: "English", mark: 55 },
  { name: "John", id: 1, subjCode: "Science", mark: 35 },
  { name: "Abishek", id: 2, subjCode: "Science", mark: 85 },
  { name: "Abishek", id: 2, subjCode: "Maths", mark: 25 },
  { name: "Asklone", id: 3, subjCode: "Maths", mark: 25 },
];
// O/P:
// 1)
// John - 1, English-55, Science-35
// Abishek - 2, Science-85, Maths-25
// Asklone - 3, Maths-25

// 2)
// English average is 55
// Science average is 60
// Maths average is 25

// function groupStudentMarks(students) {
//   let result = {};
//   for (let i = 0; i < students.length; i++) {
//     const { name, id, subjCode, mark } = students[i];
//     if (!result[name]) {
//       result[name] = { id, subjects: [] };
//     }
//     result[name].subjects.push(`${subjCode}-${mark}`);
//   }
//   for (let student in result) {
//     const studentData = result[student];
//     const subject = studentData.subjects.join(",");
//     console.log(`${student}-${studentData.id},${subject}`);
//   }
// }

// groupStudentMarks(aStudMarks);

function calculateSubjectAverages(records) {
  const subMap = {};
  records.forEach((record) => {
    const { subjCode, mark } = record;
    if (!subMap[subjCode]) {
      subMap[subjCode] = { total: 0, count: 0 };
    }
    subMap[subjCode].total += mark;
    subMap[subjCode].count += 1;
  });
  for (let x in subMap) {
    const average = subMap[x].total / subMap[x].count;
    console.log(`${x} average is ${average}`);
  }
}

calculateSubjectAverages(aStudMarks);
