class MyClass{
    #privateField;
    constructor(value){
        this.#privateField = value;
    }
    gerPrivateField(){
        return this.#privateField;
    }
}

const instance = new MyClass('secret');
console.log(instance.gerPrivateField());
// console.log(instance.#privateField);