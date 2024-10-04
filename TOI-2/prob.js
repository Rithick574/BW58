// const ab = [
//     [{ af: [1, 23, 46] }],
//     [{ af: [1, 23, 46] }],
//     [{ af: [1, 23, 46] }],
//     [{ af: [1, 23, 46] }]
//   ];

//   const result = ab.flat().flatMap(x=>x.af).reduce((acc,curr)=>acc+curr,0)
//   console.log(result);

// function findAscii(word){
//     let sum =0;
//     for(let i=0;i<word.length;i++){
//         sum += word.charCodeAt(i)
//     }
//     return sum;
// }

// function groupAnagrams(words){
//     let group ={};
//     for(let i=0;i<words.length;i++){
//         let asciiCount = findAscii(words[i])
//         if(!group[asciiCount]){
//             group[asciiCount] = []
//         }
//         group[asciiCount].push(words[i])
//     }
//     return Object.values(group)
// }


// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const result = groupAnagrams(words);
// console.log(result);

// function findSecondHighestAndLeast(arr) {
//   const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
//   const secondLeast = uniqueArr[1];
//   const secondHighest = uniqueArr[uniqueArr.length - 2];
//   console.log(`Second Least: ${secondLeast}, Second Highest: ${secondHighest}`);
// }

// const array = [1, 2, 9, 78, 2, 4, 5, 6, 6, 7];
// findSecondHighestAndLeast(array);
