function removeAdjacentOddElements(arr){
    let result =[];
    arr.forEach((element,index) => {
        let current = arr[index];
        let previous = arr[index-1]
        if(!(index > 0 && previous%2 !== 0 && current%2 !==0) ){
            result.push(current)
        };
    });
    return result;
}

const arr = [1, 3, 5, 2, 7, 8, 3, 4];
const filteredArray = removeAdjacentOddElements(arr);
console.log(filteredArray);