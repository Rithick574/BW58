function isPalidromeornot(str){
if(str.length <= 1) return true;

if(str[0] !== str[str.length -1]) return false;

return isPalidromeornot(str.slice(1,-1))
}

console.log(isPalidromeornot("hello"));
console.log(isPalidromeornot("abcba"));