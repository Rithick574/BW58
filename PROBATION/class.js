class Animal{
    speak(){
        console.log("Animal is making sound")
    }
};

class Dog extends Animal{
    speak(){
        super.speak()
        console.log("Dog is barking...")
    }
};

const myDog = new Dog();
myDog.speak()