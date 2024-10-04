const arr = [1, 2, 4, 5, 6, 7, 8, 9];

// function binarySearch(arr, target, start = 0, end = arr.length - 1) {
//   if (start > end) {
//     return -1;
//   }
//   let middle = Math.floor((start + end) / 2);
//   if (arr[middle] === target) {
//     return middle;
//   } else if (arr[middle] > target) {
//     return binarySearch(arr, target, start, middle - 1);
//   } else {
//     return binarySearch(arr, target, middle + 1, end);
//   }
// }


// function binarySearch(arr,target,start=0,end=arr.length-1){
//   if(start>end){
//     return -1
//   }
//   let middle = Math.floor((start+end)/2);
//   if(arr[middle] === target){
//     return middle
//   }else if(arr[middle] > target){
//     return binarySearch(arr,target,start,mid-1)
//   }else{
//     return binarySearch(arr,target,middle+1,end)
//   }
// }

// const a = binarySearch(arr, 7);

// console.log(a);
