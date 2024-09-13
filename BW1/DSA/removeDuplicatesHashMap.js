function removeAllDuplicates(str) {
  let countMap = new Map();
  let result = [];
  for (const char of str) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  };
  for(const char of str){
    if(countMap.get(char) == 1){
        result.push(char)
    }
  }
  return result.join('');
}

const inputString = "helloworld";
const outputString = removeAllDuplicates(inputString);
console.log(outputString);
