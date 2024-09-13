class Graph {
  constructor() {
    this.map = new Map();
  }
  addVertex(data) {
    this.map.set(data, []);
  }
  insert(vertex, edge, isBidirectional) {
    if (!this.map.has(vertex)) {
      this.addVertex(vertex);
    }
    if(!this.map.has(edge)){
        this.addVertex(edge)
    }
    this.map.get(vertex).push(edge);
    if(isBidirectional){
        this.map.get(edge).push(vertex)
    }
  };
  display(){
    for(const x of this.map.keys()){
        console.log(x + ": ");
        for(const y of this.map.get(x)){
            console.log(y + " ")
        }
        console.log()
    }
  }
  dfs(start,visited= new Set()){
    if(!this.map.has(start)){
        console.log(`Vertex ${start} not found in the graph`);
        return;
    }
    visited.add(start);
    console.log(start);
    for(const neighbor of this.map.get(start)){
        if(!visited.has(neighbor)){
            this.dfs(neighbor,visited)
        }
    }
  };
  bfs(start){
    if(!this.map.has(start)){
        console.log(`Vertex ${start} not found in the graph`);
        return;
    }
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    while(queue.length >0){
        const current = queue.shift();
        console.log(current);
        for(const neighbor of this.map.get(current)){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push(neighbor)
            }
        }
    }
  }
}

let graph = new Graph();
graph.insert(3, 4, true);
graph.insert(5, 6, false);
graph.insert(4, 6, true);
graph.insert(3, 5, true);
graph.display();
console.log("DFS Traversal:");
graph.dfs(3);
console.log("BFS Traversal:");
graph.bfs(3);