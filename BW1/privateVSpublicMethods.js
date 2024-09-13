function Counter() {
  let _count = 0;
  function increment() {
    _count++;
  }
  this.getCount  = function(){
    increment();
    return _count
  }
return {getCount};
}

const counter = new Counter()

console.log(counter.getCount());