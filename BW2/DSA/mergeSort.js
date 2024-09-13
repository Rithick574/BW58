function merge(left, right) {
    let result = [];
    while(left.length && right.length){
        if(left[0]  < right [0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
}
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const arr = [4, 6, 3, 1, 7, 9, 8];
console.log(mergeSort(arr));
