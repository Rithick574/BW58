function groupAnagrams(words) {
  const anagramMap = {};

  words.forEach((word) => {
    const sortedWord = word.split("").sort().join("");

    if (!anagramMap[sortedWord]) {
      anagramMap[sortedWord] = [];
    }

    anagramMap[sortedWord].push(word);
  });

  return Object.values(anagramMap);
}

// Example usage:
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);
