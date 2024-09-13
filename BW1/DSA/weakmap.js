const map2 = new Map();
let obj2 = { name: "vishal" };
map2.set(obj2, "metadata");
console.log(map2);
obj2 = null;
console.log(map2);

let map3 = new WeakMap();
let obj3 = { name: "Rithick" };
map3.set(obj3, "metadata");

console.log(map3);
obj3 = null;
console.log(map3);
