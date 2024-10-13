// const array1 = [
//   { id: 1, name: "Alice", scores: { math: 90, english: 80 } },
//   { id: 2, name: "Bob", scores: { math: 85, english: 75 } },
// ];

// const array2 = [
//   { id: 1, name: "Alice", scores: { science: 70, geography: 65 } },
//   { id: 2, name: "Bob", scores: { science: 90, geography: 55 } },
//   { id: 3, name: "Charlie", scores: { math: 95, english: 85 } },
// ];

// output:-

// [
//     { id: 1, name: "Alice", scores: { math: 90, english: 80, science: 70 ,geography:65} },
//     { id: 2, name: "Bob", scores: { math: 85, english: 75,science: 90,geography:55 } },
//     { id: 3, name: "Charlie", scores: { math: 95, english: 85 } }
// ];

// answers :-

// for (let i = 0; i < array2.length; i++) {
//   for (let j = 0; j < array1.length; j++) {
//     if (array2[i].id === array1[j].id) {
//         Object.assign(array2[i].scores,{...array1[j].scores})
//     }
//   }
// };

// console.log(array2);

// const mergedArrays = [...array1,...array2].reduce((acc,curr)=>{
// const existing = acc.find(item=>item.id === curr.id);
// if(existing){
//     existing.scores = {...existing.scores,...curr.scores}
// }else{
//     acc.push(curr)
// }
// return acc;
// },[])

// console.log(mergedArrays);






