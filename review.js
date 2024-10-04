// function fetchDetails(){
//     getUserDate((userError,userdata)=>{
//         if(userError){
//             console.log(userdata)
//         }else{
//             getOrderData(orderError,(orderData)=>{
//                 if(orderError){
//                     console.log(orderError)
//                 }else{
//                     getOrderId(err,(orderData)=>{
//                         console.log("orderData:",orderData[0]);
//                     })
//                 }
//             })
//         }
//     })
// };

// fetchDetails();


// function getUserDate(){
//     return new Promise((resolve,reject)=>{
//         resolve("userData")
//     })
// };

// function getOrderData(){
//     return new Promise((resolve,reject)=>{
//         resolve("orderData")
//     })
// };

// function fetchDetail(){
//     getUserDate().then((userdata)=>{
//     }).then((orderData)=>{
//         getOrderData(userdata)
//     }).then((orderData)=>{
//         console.log("orderData:",orderData[0]);
//     })
// };

// const obj1={
//     name:"rithick",
//     greet:function(...args){
//         console.log(`hello my ${this.name},${args}`)
//     }
// };

// const obj2 = {
//     name:"muhammed"
// };

// obj1.greet.call(obj2,"good mornig")
// obj1.greet.apply(obj2,["good mornig"])
// const bindMethod = obj1.greet.bind(obj2,"good mornig");
// bindMethod();

// structuredClone(obj1);

// function heapify(arr, n, i) {
//   let largest = i;
//   let left = i * 2 + 1;
//   let right = i * 2 + 2;
//   if (left < n && arr[left] > arr[largest]) {
//     largest = left;
//   }
//   if (right < n && arr[right] > arr[largest]) {
//     largest = right;
//   }
//   if (largest !== i) {
//     [arr[i], arr[largest]] = [arr[largest], arr[i]];
//     heapify(arr, n, largest);
//   }
// }

// function heapSort(arr) {
//   let n = arr.length;
//   for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
//     heapify(arr, n, i);
//   }

//   for (let i = n - 1; i >= 0; i--) {
//     [arr[i], arr[0]] = [arr[0], arr[i]];
//     heapify(arr, i, 0);
//   }
// }
// const arr = ["R", "I", "T", "H", "I", "C", "K"];
// heapSort(arr);
// console.log("sortedArr:", arr);

class Graph{
    constructor(){
        this.map = new Map()
    }
    addVertex(data){
        this.map.set(data,[])
    }
    insert(vertex,edge,bidirectional){
        if(!this.map.has(vertex)){
            this.addVertex(vertex)
        }
        if(!this.map.has(edge)){
            this.addVertex(edge);
        }
        this.map.get(vertex).push(edge);

        if(bidirectional){
            this.map.get(edge).push(vertex)
        }
    };
    
    dfs(start,visited=new Set()){
        if(!this.map.has(start)){
            console.log(`there is no such starting point:${start}`);
            return;
        }
        visited.add(start);
        console.log(start);
        for(const neighbour of this.map.get(start)){
            if(!visited.has(neighbour)){
                this.dfs(neighbour,visited)
            }
        }
    }
};

const graph = new Graph();
graph.insert(8,5,true)
graph.insert(9,4,true)
graph.insert(4,8,true)
graph.insert(2,9,true)
graph.insert(7,1,true);
graph.dfs(2)