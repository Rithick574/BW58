function reverseStringUsingStack(str){
const stack =[];
for(let i=0;i<str.length;i++){
    stack.push(str[i])
};
let reversedString="";
while(stack.length >0){
    reversedString += stack.pop()
};
return reversedString
};

const originalString = "Rahul Ranjan";
const reversedString = reverseStringUsingStack(originalString);
console.log(reversedString);