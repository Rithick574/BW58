const insertionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let current = arr[i];
        let j=i-1;
        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1]  = current;
    }
    return arr;
}
const arr = [2, 5, 7, 45, 3, 1, 9];
console.log(insertionSort(arr));
