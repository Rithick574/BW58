function Factory(name,age){
    return{
        name: name,
        age : age,
        greet(){
            console.log(`Hello, my name is ${this.name}`);
        }
    }
};

const person = Factory("Rithick",24);
console.log(person.name);
person.greet()