class Graph {
  constructor() {
    this.map = {};
  }

  addVertex(vertex) {
    if (!this.map[vertex]) {
      this.map[vertex] = new Set();
    }
  }

  insert(vertex, edge, isBidirectional, weight) {
    if (!this.map[vertex]) {
      this.addVertex(vertex);
    }
    if (!this.map[edge]) {
      this.addVertex(edge);
    }

    this.map[vertex].add({ node: edge, weight: weight });

    if (isBidirectional) {
      this.map[edge].add({ node: vertex, weight: weight });
    }
  }

  display() {
    for (const vertex in this.map) {
      const edges = [...this.map[vertex]].map(
        (edge) => `${edge.node} (weight: ${edge.weight})`
      );
      console.log(vertex + ": " + edges.join(", "));
    }
  }

  dfs(start) {
    let visited = new Set();
    let stack = [start];

    while (stack.length > 0) {
      let node = stack.pop();

      if (!visited.has(node)) {
        visited.add(node);
        console.log(node);

        for (const edge of this.map[node]) {
          if (!visited.has(edge.node)) {
            stack.push(edge.node);
          }
        }
      }
    }
  }

  bfs(start) {
    let visited = new Set();
    let queue = [start];

    while (queue.length > 0) {
      let node = queue.shift();

      if (!visited.has(node)) {
        visited.add(node);
        console.log(node);

        for (const edge of this.map[node]) {
          if (!visited.has(edge.node)) {
            queue.push(edge.node);
          }
        }
      }
    }
  }
}

let graph = new Graph();
graph.insert(3, 5, true, 10);
graph.insert(3, 4, true, 4);
graph.insert(5, 6, false, 70);
graph.insert(5, 7, false, 19);
graph.display();
graph.dfs(3);
graph.bfs(3);
