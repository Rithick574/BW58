const obj={
    name:"Rithick",
    greet:function(arg){
        console.log("hello",this.name,arg);
    }
};

const obj2={
    name:"Rahul",
};

obj.greet.call(obj2,"Goodmorning")
obj.greet.apply(obj2,["Good morning"])
const boundGreet = obj.greet.bind(obj2,"goodNight");
boundGreet();

