/* eslint-disable no-undef */

class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  // root >> left >> right
  preOrder() {
    const results = [];
    const _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  // left >> root >> right
  inOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      results.push(node.value);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  // left >> right >> root
  postOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
  breadthFirst(tree) {
    // if (node === null) return;
    let results = [];
    let childs = [];
    let node = tree.rootl
    if (!node) return 'the tree is empty';
    childs.push(node);
    while (childs.length) {
      let temp = childs.shift();
      results.push(temp.value);
      if (temp.left) childs.push(temp.left);
      if (temp.right) childs.push(temp.right);
    }
    return results;
  }


}
module.exports = BinaryTree;
