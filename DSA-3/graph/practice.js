const Adjacency = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B" ,'A'],
};
class adjacencyList {
  constructor() {
    this.adlist = {};
  }

  add_vertex(vertex) {
    if (!this.adlist[vertex]) {
      this.adlist[vertex] = new Set();
    }
  }

  add_edges(vertex1, vertex2) {
    if (!this.adlist[vertex1]) {
      this.add_vertex(vertex1);
    }
    if (!this.adlist[vertex2]) {
      this.add_vertex(vertex2);
    }
    this.adlist[vertex1].add(vertex2);
    this.adlist[vertex2].add(vertex1);
  }
  has_edges(vertex1, vertex2) {
    if (!this.adlist[vertex1]) {
      return false;
    }

    return (
      this.adlist[vertex1].has(vertex2) && this.adlist[vertex2].has(vertex1)
    );
  }

  edges_delete(vertex1, vertex2) {
    if (!this.adlist[vertex1] || !this.adlist[vertex2]) {
      return false;
    }
    this.adlist[vertex1].delete(vertex2);
    this.adlist[vertex2].delete(vertex1);
  }

  vertex_remove(vertex) {
    if (!this.adlist[vertex]) {
      return;
    }

    for (const element of this.adlist[vertex]) {
          this.edges_delete(element,vertex)
    }
    delete this.adlist[vertex]
  }

  dfs(vertex, visited, parent) {
    visited.add(vertex); // Mark the vertex as visited

    // Visit all the neighbors of the current vertex
    for (const neighbor of this.adlist[vertex]) {
      // If the neighbor is not visited yet, do a DFS on it
      if (!visited.has(neighbor)) {
        if (this.dfs(neighbor, visited, vertex)) {
          return true; // Cycle detected
        }
      }
      // If the neighbor is visited and it's not the parent of the current vertex, we have a cycle
      else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  }

  // Main function to check for cycles in the graph
  detect_cycle() {
    const visited = new Set();

    // Check for cycles in every vertex (in case the graph is disconnected)
    for (const vertex in this.adlist) {
      if (!visited.has(vertex)) {
        if (this.dfs(vertex, visited, null)) {
          return true; // Cycle found
        }
      }
    }
    return false; // No cycle
  }

  print() {
    for (const key in this.adlist) {
      console.log(`${key}=>${[...this.adlist[key]]}`);
    }
  }
}
const graph = new adjacencyList();
graph.add_vertex("A");
graph.add_vertex("B");
graph.add_vertex("C");
graph.add_edges("A", "B");
graph.add_edges("B", "C");

graph.add_edges('C','A')
graph.print()
console.log(graph.detect_cycle());

graph.print();
