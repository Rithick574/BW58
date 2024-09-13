function execute(func,value){
    return func(value)
}
function double(x){
    return x+x
}

console.log(execute(double,5));