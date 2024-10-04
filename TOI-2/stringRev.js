const str = "hello world";
function reverseString(str){
if(str.length == 0){
    return str;
};
return str[str.length-1]+ reverseString(str.slice(0,-1))
};

console.log(reverseString(str));
