const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [4, 5, 6, 7, 8, 9];

function RemoveDuplicates(arr1, arr2) {
  let uniques1 = [];
  let uniques2 = [];

  for (let i = 0; i < arr1.length; i++) {
    let a = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        a = true;
        break;
      }
    }
    if(!a){
        uniques1.push(arr1[i])
    }
  }

  for(let i=0;i<arr2.length;i++){
    let a = false;
    for(let j=0;j<arr1.length;j++){
        if(arr2[i] === arr1[j]){
            a= true;
            break;
        }
    }
    if(!a){
        uniques2.push(arr2[i])
    }
  }

  return {uniques1,uniques2}
}

const joined = RemoveDuplicates(arr1, arr2);

const res = [...joined.uniques1,...joined.uniques2]
console.log("🚀 ~ file: removeDuplicates.js:40 ~ res:", res)
