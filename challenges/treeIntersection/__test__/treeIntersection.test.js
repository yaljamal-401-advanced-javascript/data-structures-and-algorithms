/* eslint-disable new-cap */
/* eslint-disable no-undef */
const { node, tree_intersection } = require('../treeIntersection.js');

const trees = [];
trees[0] = new node(150);
trees[0].left = new node(100);
trees[0].left.left = new node(75);
trees[0].left.right = new node(160);
trees[0].left.right.left = new node(125);
trees[0].left.right.right = new node(175);
trees[0].right = new node(250);
trees[0].right.left = new node(200);
trees[0].right.right = new node(350);
trees[0].right.right.left = new node(300);
trees[0].right.right.right = new node(500);

trees[1] = new node(42);
trees[1].left = new node(100);
trees[1].left.left = new node(15);
trees[1].left.right = new node(160);
trees[1].left.right.left = new node(125);
trees[1].left.right.right = new node(175);
trees[1].right = new node(600);
trees[1].right.left = new node(200);
trees[1].right.right = new node(350);
trees[1].right.right.left = new node(4);
trees[1].right.right.right = new node(500);

describe('treeIntersection', () => {
  it('treeIntersection', () => {
    expect(tree_intersection(trees[0], trees[1])).toStrictEqual([
      100,
      160,
      200,
      350,
      125,
      175,
      500,
    ]);
  });
});

