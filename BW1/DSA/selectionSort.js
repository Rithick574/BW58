function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex =i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if(minIndex !== i){
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    console.log(arr)
  }
  return arr;
}

const arr = [2, 5, 7, 45, 3, 1, 9];

console.log(selectionSort(arr));