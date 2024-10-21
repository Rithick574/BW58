// Create a JavaScript class called Person with properties name and age. 
// Implement a method called greet that returns a greeting message, 
// including the person's name and age. Additionally,
// create a subclass called Student that inherits from
// Person and has an additional property grade.
// Override the greet method in the Student class to include the student's grade in the greeting message.

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    };
    greet(){
        return `Hello,my name is ${this.name} and Iam ${this.age} years old`
    }
};

class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    };
    greet(){
        return `Hello,My name is ${this.name} and iam ${this.age} years old and iam got ${this.grade}`
    }
}

const person = new Person("Alice","30");
console.log(person.greet());

const student  = new Student("bob","21","B+");
console.log(student.greet());



