const muhammed=()=>{
    console.log(this);
};

muhammed();

const obj={
    name:"arjun",
    greet:()=>{
        console.log("hello",this);
    }
};

obj.greet();