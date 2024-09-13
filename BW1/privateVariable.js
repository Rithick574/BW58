function counter(){
    var _counter=0;
    var hello =9
    function add(increment){
        _counter += increment;
        hello +=increment
    }

    function retrieve(){
        return "Counter = " + _counter + "  hello :" +hello
    }
    return {add,retrieve}
}



const a = counter();
a.add(4)
a.add(7)
console.log(a.retrieve());

