/* eslint-disable no-undef */
const Tree=require('../lib/tree.js');
const Node=require('../lib/node.js');
const BST=require('../lib/BinarySearchTree.js');
describe('Binary Search Tree',()=>{
  it('Instance empty tree',()=>{
    const inst=new Tree();
    expect(inst instanceof Tree).toBeTruthy();
  });
  it('instantiate a tree with a single root node',()=>{
    const one=new Node(1);
    const tree=new Tree(one);
    expect(tree instanceof Tree).toBeTruthy();

  });
  it('add a left child and right child to a single root node',()=>{
    const one=new Node(1);
    const two =new Node(2);
    const three=new Node(3);
    one.left=two;
    one.right=three;
    const tree=new Tree(one);
    expect(one.left).toEqual(two);
    expect(one.right).toEqual(three);
  });
  it(' return a collection from a pre-order traversal',()=>{
    const one=new Node(1);
    const two =new Node(2);
    const three=new Node(3);
    one.left=two;
    one.right=three;
    const tree=new Tree(one);
    const pre=tree.preOrder();
    expect(pre).toEqual([1,2,3]);
  });
  it(' return a collection from a post-order traversal',()=>{
    const one=new Node(1);
    const two =new Node(2);
    const three=new Node(3);
    one.left=two;
    one.right=three;
    const tree=new Tree(one);
    const post=tree.postOrder();
    expect(post).toEqual([2,3,1]);
  });
  it(' return a collection from a in-order traversal',()=>{
    const one=new Node(1);
    const two =new Node(2);
    const three=new Node(3);
    one.left=two;
    one.right=three;
    const tree=new Tree(one);
    const inOrder=tree.inOrder();
    expect(inOrder).toEqual([2,1,3]);
  });
  it('Breadth-first approach test',()=>{
    const one=new Node(1);
    const two =new Node(2);
    const three=new Node(3);
    const four=new Node(4);
    const five =new Node(5);
    const six=new Node(6);
    const seven=new Node(7);
    one.left=two;
    one.right=three;
    two.left=four;
    two.right=five;
    three.left=six;
    three.right=seven;
    const tree=new Tree(one);
    const tree2=new Tree();
    const breadth=tree2.breadthFirst(tree);
    expect(breadth).toEqual([1,3,7,6,2,5,4]);
  });
});
