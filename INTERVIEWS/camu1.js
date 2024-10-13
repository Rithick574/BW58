// 4) Write a JavaScript function to check if a given string has all unique characters (without set).
// Example:
const s1 = "abcdef";
//   const result1 = hasUniqueCharacters(s1); // result1: true
const s2 = "hello";
//   const result2 = hasUniqueCharacters(s2); // result2: false

// function hasUniqueCharacters(str) {
//   let map = new Map();
//   for (let i = 0; i < str.length; i++) {
//     if (!map.has(str[i])) {
//       map.set(str[i], 1);
//     } else {
//       map.set(str[i], map.get(str[i]) + 1);
//     }
//   }
//   console.log(map);
//   for (let i = 0; i < str.length; i++) {
//     if (map.get(str[i]) != 1) {
//       return false;
//     }
//   }
//   return true;
// }

// function hasUniqueCharacters(str){
//     let charSet= {};
//     for(let i=0;i<str.length;i++){
//         let char = str[i];
//         if(charSet[char]){
//             return false
//         }
//         charSet[char] = true
//     }
//     return true;
// };


// console.log(hasUniqueCharacters(s1));
// console.log(hasUniqueCharacters(s2));