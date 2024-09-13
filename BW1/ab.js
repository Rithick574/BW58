// const ab = [
//     [{ af: [1, 23, 46] }],
//     [{ af: [1, 23, 46] }],
//     [{ af: [1, 23, 46] }],
//     [{ af: [1, 23, 46] }]
//   ];

//   const result = ab.flat().flatMap(obj=>obj.af).reduce((acc,curr)=>acc+curr,0)
//   console.log( result)

function calculateAscii(word) {
  let sum=0;
  for (let i = 0; i < word.length; i++) {
    sum += word.charCodeAt(i);
  }
  return sum;
}

function groupAnagrams(words) {
    let group={};
  for (let i = 0; i < words.length; i++) {
    const asciiCount = calculateAscii(words[i]);
    if(!group[asciiCount]){
        group[asciiCount] = [];
    };
    group[asciiCount].push(words[i]);
  };
  return Object.values(group);
};

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(words);
console.log(result);

