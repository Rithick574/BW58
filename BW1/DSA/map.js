const map = new Map();

const obj ={};

obj["name"] = "Rithick";
obj['age'] = 24

map.set("name","rithick");
map.set(21,"age");
map.set(true,"iseducator");

// console.log(map.delete("fsafd"));
// console.log(map,obj);

// console.log(map.get("name"));

// map.forEach((value,key)=>{
//     console.log(`${key} : ${value}`);
    
// })

// console.log(Object.keys(obj));

// Object.entries(obj).forEach(([key,value])=>{
//     console.log(`${key} : ${value}`);
// });

// Object.keys(obj).forEach((x)=>{
//     console.log(`${x} : ${obj[x]}`);
// })

const arr = [1000000].fill(0).map(()=>Math.random()*10000000)
console.log("🚀 ~", arr)
