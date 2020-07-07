/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
const Tree = require('../lib/tree.js');
const Node = require('../lib/node.js');
describe('Binary Search Tree', () => {
  it('Instance empty tree', () => {
    const inst = new Tree();
    expect(inst instanceof Tree).toBeTruthy();
  });
  it('instantiate a tree with a single root node', () => {
    const one = new Node(1);
    const tree = new Tree(one);
    expect(tree instanceof Tree).toBeTruthy();

  });
  it('add a left child and right child to a single root node', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    one.left = two;
    one.right = three;
    const tree = new Tree(one);
    expect(one.left).toEqual(two);
    expect(one.right).toEqual(three);
  });
  it(' return a collection from a pre-order traversal', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    one.left = two;
    one.right = three;
    const tree = new Tree(one);
    const pre = tree.preOrder();
    expect(pre).toEqual([1, 2, 3]);
  });
  it(' return a collection from a post-order traversal', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    one.left = two;
    one.right = three;
    const tree = new Tree(one);
    const post = tree.postOrder();
    expect(post).toEqual([2, 3, 1]);
  });
  it(' return a collection from a in-order traversal', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    one.left = two;
    one.right = three;
    const tree = new Tree(one);
    const inOrder = tree.inOrder();
    expect(inOrder).toEqual([2, 1, 3]);
  });
  const tree = new Tree();
  const tree2 = new Tree();
  tree.add(10);
  tree.add(8);
  tree.add(11);
  tree.add(7);
  tree.add(9);
  tree.add(6);
  it('Breadth-first approach test', () => {
    const breadth = tree2.breadthFirst(tree);
    expect(breadth).toEqual([10, 8, 11, 7, 9, 6]);
  });
  it('findMaximumValue test', () => {
    const max = tree.findMaximumValue();
    expect(max).toEqual(11);
  });
});
