// 9
// 13+9+1 = 23
// 5+13+9+1+2 = ..
// 2+5+13+9+1+2+3 = ..
// -1+2+5+13+9+1+2+3+-2 = ..

const ab = [-1,2,5,13,9,1,2,3,-2];

let sum;
for (let i = 4; i >= 0; i--) { 
    sum = 0;
    let sequence = [];
    for (let j = i; j < ab.length; j++) { 
        sum += ab[j];
        sequence.push(ab[j]);
    }
    console.log(`${sequence.join('+')} = ${sum}`);
}