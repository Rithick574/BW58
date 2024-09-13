// function bubbleSort(arr){
//     let swapped;
//     do{
//         swapped = false;
//         for(let i=0;i<arr.length;i++){
//             if(arr[i] > arr[i+1]){
//                 [arr[i],arr[i+1]]= [arr[i+1],arr[i]]
//                 swapped = true;
//             }
//         }
//     }while(swapped);
//     return arr;
// }


function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}
const arr = [-7, -2, 5,5,5,6, 1000, 6];
console.log(bubbleSort(arr));