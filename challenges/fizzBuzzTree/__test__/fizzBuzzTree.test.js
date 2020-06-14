/* eslint-disable no-undef */
const fizzBuzzTree=require('../lib/fizzBuzzTree.js');
const Tree=require('../../tree/lib/tree.js');
const Node=require('../../tree/lib/node.js');
describe('FuzzBuzzTree',()=>{
  it('if passing tree',()=>{
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
    tree.postOrder();
    expect(fizzBuzzTree(tree)).toEqual({"root": {"left": {"left": {"left": null, "right": null, "value": 4}, "right": {"left": null, "right": null, "value": "buzz"}, "value": 2},
    "right": {"left": {"left": null, "right": null, "value": "Fizz"}, "right": {"left": null, "right": null, "value": 7},
    "value": "Fizz"}, "value": 1}});
  });
});

