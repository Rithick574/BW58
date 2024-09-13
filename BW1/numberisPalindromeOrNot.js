const num = 12321;

// function isPalindrome(n) {
//   const str = n.toString();
//   const reverse = str.split("").reverse().join("");
//   console.log(typeof reverse);
//   return str === reverse;
// }

// isPalindrome(num);

// function palindrome(n) {
//   let original = n;
//   let reversed = 0;
//   let reminder;
//   while (n > 0) {
//     reminder = n % 10;
//     reversed = (reversed * 10) + reminder;
//     n = Math.floor(n/10)
//   }
//   return original === reversed;
// }


function palindrome (n){
  let org = n;
  let rev = 0;
  let reminder;
  while( n > 0){
    reminder = n % 10;
    rev = (rev * 10) + reminder;
    n = Math.floor(n/10) 
  }
  return org === rev;
};

console.log(palindrome(num));

232