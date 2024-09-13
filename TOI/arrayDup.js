function removeAllDuplicates(arr){
    let result = [];
    let countMap = new Map();
    for(const x of arr){
        countMap.set(x,(countMap.get(x) || 0)+1)
    }
    for(const x of arr){
        if(countMap.get(x) == 1){
            result.push(x)
        }
    }
    return result;
}


const input = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const ans = removeAllDuplicates(input);
console.log(ans);