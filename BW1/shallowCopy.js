const obj = {name :'Taxi',friends:[{name:'Messi'}]};

const shallowCopy = {...obj};

const objClone = Object.assign({},obj)
console.log("🚀 ~ file: shallowCopy.js:6 ~ objClone:", objClone)

// console.log(obj.name === shallowCopy.name);
// console.log(obj.name === deepCopy);
// console.log(obj.friends === deepCopy.friends);
