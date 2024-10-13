// 5) . Write a function that finds the second longest word in a sentence.
const str = "India is my country";
// O/P: India

// function findSecondLongest(str) {
//   let sentance = str.split(" ");
//   const sorted = sentance.sort((a, b) => b.length - a.length);
//   return sorted[1];
// }

// console.log(findSecondLongest(str));


function findSecondLongestWord(sentance){
let currentWord = "";
let longestWord ="";
let secondLongestWord ="";
for(let i=0;i<=sentance.length;i++){
    if(sentance[i] !== " " && i!==sentance.length){
        currentWord +=sentance[i]
    }else{
        if(currentWord.length > longestWord.length){
            secondLongestWord = longestWord;
            longestWord = currentWord;
        }else if(currentWord.length > secondLongestWord.length && currentWord !== longestWord){
            secondLongestWord = currentWord;
        }
        currentWord ="";
    }
};
return secondLongestWord;
};

console.log(findSecondLongestWord(str));