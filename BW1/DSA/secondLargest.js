const arr = [12,35,1,10,34,1];

// function secondLargest(arr){
//     const uniqueArray = Array.from(new Set(arr))
//     uniqueArray.sort((a,b)=>a-b)
//     console.log(uniqueArray);
//     if(uniqueArray.length >= 2){
//         return uniqueArray[1];
//     }else{
//         return -1;
//     }
// };

function secondLargest(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLarge = Number.NEGATIVE_INFINITY;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            secondLarge = largest;
            largest = arr[i];
        }else if(arr[i] != largest && arr[i] > secondLarge){
            secondLarge = arr[i];
        }
    }
    return secondLarge;
}

console.log(secondLargest(arr));