const values = [true,1,"string",{},[],()=>{}];

values.forEach((value,index)=>{
    if(value){
        console.log(`Value at index ${index} is truthy`);
    }
});