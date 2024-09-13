const map2 = new Map();
let obj = { name: "vishal" };
map2.set(obj, "metadata");
obj = null;
console.log(map2);

let map3 = new WeakMap();
let obj2 = { name: "Rithick" };

map3.set(obj2, "metadata");

// Before nullifying obj2
console.log(map3.has(obj2)); // true
console.log(map3.get(obj2)); // "metadata"

obj2 = null; // Now obj2 is eligible for garbage collection

// After obj2 is nullified
console.log(map3.has(obj2)); // false (will not work since obj2 is now null)

