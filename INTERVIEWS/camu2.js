// 1) Write a function that merges these two arrays into a single array, such that each student object in aStudents includes the corresponding mark from aMarks based on the matching id (without spread operator)

// O/P:
// const aStudents = [
//    { name: 'Abishek', id: 1, mark: 100 },
//    { name: 'Sanjay', id: 2, mark: 65 },
//    { name: 'Durai', id: 3, mark: 85 }
// ];

// for(let i=0;i<aMarks.length;i++){
//     let existing = aStudents.find(item=>item.id == aMarks[i].id );
//    if(existing){
//     existing.mark=aMarks[i].mark
//    }
// };

// console.log(aStudents);
const aStudents = [
  { name: "Abishek", id: 1 },
  { name: "Sanjay", id: 2 },
  { name: "Durai", id: 3 },
];
const aMarks = [
  { mark: 65, id: 2 },
  { mark: 100, id: 1 },
  { mark: 85, id: 3 },
];

function mergeStudentMarks(students, marks) {
  let marksLookup = {};
  for (let i = 0; i < marks.length; i++) {
    marksLookup[marks[i].id] = marks[i].mark;
  }

  for (let i = 0; i < students.length; i++) {
    students[i].mark = marksLookup[students[i].id];
  }
  return students;
};

const mergedArray = mergeStudentMarks(aStudents, aMarks);
console.log(mergedArray);
