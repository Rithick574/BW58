function Factory(name,age){
this.name = name;
this.age = age;
};

const person = new Factory("rithick",23);

console.log(person.name);
console.log(person.age);