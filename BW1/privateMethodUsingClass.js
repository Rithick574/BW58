class Counter{
    #count = 0;
    #increment(){
        this.#count++;
    }
    getCount(){
        this.#increment();
        return this.#count;
    }
}

const counter = new Counter();
console.log(counter.getCount());
console.log(counter.getCount());