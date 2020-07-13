/* eslint-disable no-undef */
class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
class Graph {
  constructor() {
    this._adjancyList = new Map();
    this.sizeGraph = [];
  }
  addVertex(vertex) {
    this._adjancyList.set(vertex, []);
    this.sizeGraph++;
  }
  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this._adjancyList.has(startVertex) || (!this._adjancyList.has(endVertex))) {
      console.log('Vertex Not Found');
    } else {
      const adjacenies = this._adjancyList.get(startVertex);
      adjacenies.push(new Edge(endVertex, weight));
    }
  }
  getNeighbors(vertex) {
    if (this._adjancyList.has(vertex)) {
      return this._adjancyList.get(vertex);
    }
  }
  printAll() {
    for (const [vertex, edge] of this._adjancyList.entries()) {
      console.log('V>>', vertex);
      console.log('E>>', edge);

    }
  }
  size() {
    return this.sizeGraph;
  }
  getEdge(arr) {
    let cost = 0;
    for (let i = 0; i < this._adjancyList.length; i++) {
      if (this._adjancyList.has(arr[i])) {
        let neibhor = this._adjancyList.get(arr[i]);
        if (!neibhor.includes(arr[i - 1])) {
          return 'False, 0$';
        }
      }
      cost = cost + this.weight;
    }
    return `True,${cost}$`;
  }
}
module.exports = { Vertex, Graph };


