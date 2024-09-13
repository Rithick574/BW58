// const ab = [[{af:[1,23,46]}], [{af:[1,23,46]}], [{af:[1,23,46]}], [{af:[1,23,46]}]];

// let sum = 0;
// for(let i = 0; i < ab.length; i++) {
//     ab[i][0].af.forEach((num) => {
//         sum += num;
//     })
// };

// console.log(sum);

// 92
// 79
// 67

// let n=106;/

// for(let i=14;i>=1;i--){
//     console.log(n-i);
//     n -= i
// }

// function decreasing(n, i) {
//   console.log(n);
//   if (n === 1) {
//     return;
//   }
//   return decreasing(n - i, i - 1);
// }

// decreasing(92, 13);

// function desending(n,i){
//     console.log(n);
//     if(n == 1){
//         return ;
//     }
//     desending(n-i,i-1)
// }
// desending(92,13);

function decreasing(n,i){
  console.log(n);
  if(n==1) return;
  decreasing(n-i,i-1)
}


decreasing(92, 13);