function removeAdjacentOdds(arr) {
  if (arr.length <= 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 1 && arr[i - 1] % 2 === 1) {
        arr.splice(i,1);
        i--
    }
  };
  return arr;
}

console.log(removeAdjacentOdds([1, 2, 3, 4, 5, 5, 7, 8, 9]));
console.log(removeAdjacentOdds([2, 4, 6, 8]));
console.log(removeAdjacentOdds([1, 3, 5, 7, 9]));
console.log(removeAdjacentOdds([1, 1, 1, 1, 2, 3, 3, 4, 5, 5]));

// function removeAdjacentOdds(arr){
//     if(arr.length <= 1) return arr;
//     for(let i=1;i<arr.length;i++){
//         if(arr[i] %2 ===1 && arr[i-1]%2 ===1){
//             arr.splice(i,1);
//             i--;
//         }
//     }
//     return arr;
// }
