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
    if (!this.map.has(edge)) {
      this.addVertex(edge);
    }
    this.map.get(vertex).push(edge);
    if (isBidirectional) {
      this.map.get(edge).push(vertex);
    }
  }
  display() {
    for (const x of this.map.keys()) {
      console.log(x, ":");
      for (const y of this.map.get(x)) {
        console.log(y);
      }
      console.log();
    }
  }
  dfs(start, visited = new Set()) {
    if (!this.map.has(start)) {
      console.log(`vertex ${start} not found in the graph`);
      return;
    }
    visited.add(start);
    console.log(start);
    for (const neighbor of this.map.get(start)) {
      if (!visited.has(neighbor)) {
        this.dfs(neighbor, visited);
      }
    }
  }
  bfs(start) {
    if (!this.map.has(start)) {
      console.log(`vertex ${start} not found in the graph`);
      return;
    }
    const visited = new Set();
    let queue = [start];
    while(queue.length){
        let node = queue.shift();
        if(!visited.has(node)){
            visited.add(node);
            console.log(node);
            queue.push(...this.map.get(node))
        }
    }
  }
}

let graph = new Graph();
graph.insert(3, 4, true);
graph.insert(5, 6, true);
graph.insert(4, 6, true);
graph.insert(3, 7, true);
graph.display();
console.log("DFS Traversal:");
graph.dfs(3);
console.log("BFS Traversal:");
graph.bfs(3);
