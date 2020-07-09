/* eslint-disable no-undef */
const { Vertex, Graph } = require('../graph.js');
const graph = new Graph();
const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, seven);
graph.addDirectedEdge(eight, three);

