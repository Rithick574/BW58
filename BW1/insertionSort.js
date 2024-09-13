function insertionSort(arr){
for(let i=1;i<arr.length;i++){
    let j = i-1;
    let numberToAdd =arr[i];
    while(j>=0 && arr[j] > numberToAdd){
        arr[j+1] = arr[j];
        j=j-1;
    }
    arr[j+1] = numberToAdd;
};
return arr;
}
const arr =[2,5,7,45,3,1,9];
console.log(insertionSort(arr));