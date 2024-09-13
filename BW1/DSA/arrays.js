const arr = new Array()
console.log(typeof(arr));
arr.push(1,2,3,4,"hello",{name:"rithick"},[1,2,3],5);

arr.forEach((x,i)=>{
    console.log(x);
    
});

for(let x of arr){
    console.log(x);
}