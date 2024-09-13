const values = [false,0,"",null,undefined,NaN]

values.forEach((values,index)=>{
    if(!values){
        console.log(`Value at index ${index} is falsy`);
    }
})