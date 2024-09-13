// 10+9+8+7+6+5+5+6+7+8+9+10 = 90
// 10+9+8+7+6+6+7+8+9+10 = 80
// 10+9+8+7+7+8+9+10 = 68
// 10+9+8+8+9+10 = 54
// 10+9+9+10 = 38
// 10+10 = 20

const arr = [10, 9, 8, 7, 6, 5, 5, 6, 7, 8, 9, 10];

while (arr.length >= 2) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(arr.join("+"),"=",sum);
  arr.splice(arr.length/2-1,2)
}

