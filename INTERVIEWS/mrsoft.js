// const arr=[7,9,5,4,2,6];

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
//             }
//         }
//     };
//     return arr;
// };

// 2)
//       *
//     * * *
//   * * * * *

// function printTriangle(row){
// for(let i=1;i<=row;i++){
//     let spaces = " ".repeat(row-i);
//     let star = "*".repeat(2*i-1);
//     console.log(spaces+star)
// }
// };
// printTriangle(5);

// function printTriangle(row) {
//   for (let k = 1; k <= row; k++) {
//     let line = "";
//     for (let i = 1; i <= row - k; i++) {
//       line += " ";
//     }
//     for (let j = 1; j <= (2 * k - 1); j++) {
//       line += "*";
//     }
//     console.log(line);
//   }
// }

// printTriangle(5);

// 3) print the cities with the district


// const obj = {
//   countries: [
//     {
//       name: "india",
//       states: [
//         {
//           name: "kerala",
//           dist: [
//             {
//               name: "calicut",
//               cities: [{ name: "city1" }, { name: "city2" }],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "pakistan",
//       states: [
//         {
//           name: "punjab",
//           dist: [
//             {
//               name: "lahore",
//               cities: [{ name: "cityA" }],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };


// db.countries.aggregate([
//   { $unwind: "$countries" },
//   { $unwind: "$countries.states" },
//   { $unwind: "$countries.states.dist" },
//   {
//     $project: {
//       _id: 0,
//       state: "$countries.states.name",
//       district: "$countries.states.dist.name",
//       cities: "$countries.states.dist.cities",
//     },
//   },
// ]);
