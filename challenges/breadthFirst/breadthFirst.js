/* eslint-disable no-undef */
const Graph = require('../graph/graph.js');
class BreadthFirst extends Graph {
  breadthFirst(startNode) {
    const queue = [];
    const vistedNode = new Set();
    queue.push(startNode);
    vistedNode.add(startNode);
    while (queue.length) {
      const currentNode = queue.shift();
      const nighbors = this.getNeighbors(currentNode);
      for (let nighbor of nighbors) {
        const nighborNode = nighbor.vertex;
        if (vistedNode.has(nighborNode)) {
          continue;
        } else {
          vistedNode.add(nighborNode);
        }
        queue.push(nighborNode);
      }
    }
    return vistedNode;
  }
}
module.exports = BreadthFirst;
