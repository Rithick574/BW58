let obj1={
    name:"Rithick",
    place:"calicut",
    greet:function(...args){
        console.log(`my name is ${this.name} and iam from ${this.place},${args}`)
    }
};

let obj2={
    name:"muhammed",
    place:"vadakara"
};

obj1.greet.call(obj2,"good morning");
obj1.greet.apply(obj2,["hlo","world","123"]);
let a = obj1.greet.bind(obj2,["dhd","afdfd"])
a()