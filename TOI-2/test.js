const arr = [1,2,3];
console.log(arr.hasOwnProperty("length"))

const arrayPrototypeProperties = Object.getOwnPropertyNames(Object.getPrototypeOf(arr));
console.log("Array prototype properties:", arrayPrototypeProperties); 