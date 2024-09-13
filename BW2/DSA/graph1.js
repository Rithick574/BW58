class Graph{
    constructor(){
        this.map = new Map();
    }
    addvertex(data){
        this.map.set(data,[])
    }
    insert(vertex,edge,isBidirectional){
        if(!this.map.has(vertex)){
            this.addvertex(vertex)
        }
        if(!this.map.has(edge)){
            this.addvertex(edge)
        }
        this.map.get(vertex).push(edge);
        if(isBidirectional){
            this.map.get(edge).push(vertex)
        }
    }
    display(){
        for(const x of this.map.keys()){
            console.log(x + ":");
        
        }
    }
};

let graph = new Graph();
graph.insert(3,5,true)
graph.insert(3,4,true)
graph.insert(5,6,false)
graph.display();