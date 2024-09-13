class HashTable {
  constructor(size) {
    this.buckets = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  insert(key,value){
    const index = this.hash(key);
    if(!this.buckets[index]){
        this.buckets[index] = []
    }
    const bucket = this.buckets[index];
    const sameKeyItem = bucket.find((item)=> item[0] === key);
    if(sameKeyItem){
        sameKeyItem[1] = value;
    }else{
        bucket.push([key,value])
    }
  }
  get(key){
    const index = this.hash(key)
    const bucket = this.buckets[index]
    if(bucket){
        const item = bucket.find((item)=>item[0] === key)
        if(item){
            return item[1]
        }
    }
    return undefined;
  }
  resize(size){
    this.size = size;
    const oldTable = this.buckets;
    this.buckets = new Array(size);
    for(let i=0 ; i<oldTable.length;i++){
        const bucket = oldTable[i];
        if(bucket){
            bucket.forEach((item)=>{
                this.insert(item[0],item[1])
            })
        }
    }
  }
print(){
    for(let i=0;i<this.size;i++){
        if(this.buckets[i]){
            console.log(i,this.buckets[i]);
        }
    }
}

}


const newHash = new HashTable(10);
newHash.insert("one", "shihad");
newHash.insert("two", "shibu");
newHash.insert("owt", "anirudh");
newHash.insert("tow", "rithick");

console.log(newHash.get("tow")); 
console.log(newHash.get("three"));

newHash.print()
newHash.resize(40)
console.log(newHash.size,"second size")
newHash.print()