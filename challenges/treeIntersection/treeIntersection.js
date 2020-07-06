/* eslint-disable no-undef */
// /* eslint-disable no-undef */

// function tree_intersection(tree1, tree2) {
//   let array1 = treeToArray(tree1);
//   let array2 = treeToArray(tree2);
//   let array3 = [];
//   console.log('array1 >>>>', array1);
//   console.log('array2 >>>>', array2);
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === array2[i]) {
//       array3.push(array1[i]);
//     }
//     console.log('array3 >>>>', array3);
//   }
//   return array3;
// }
// function treeToArray(tree) {
//   const results = [];
//   const _traversal = (node) => {
//     results.push(node.value);
//     if (node.left) _traversal(node.left);
//     if (node.right) _traversal(node.right);
//   };
//   _traversal(tree.root);
//   return results;
// }

// module.exports = tree_intersection;
class node {
  constructor(val, right, left) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

const tree_intersection = (rootA, rootB) => {
  let matches = [];
  let traversal = [];
  let current = rootA;
  while (current) {
    if (!matches.includes(current.val) && existsInTree(current.val, rootB))
      matches.push(current.val);
    if (current.left) traversal.push(current.left);
    if (current.right) traversal.push(current.right);
    current = traversal.shift();
  }
  return matches;
};
const existsInTree = (val, root) => {
  let found = false;
  if (val === root.val) {
    found = true;
  }
  if (root.left && found === false) {
    found = existsInTree(val, root.left);
  }
  if (root.right && found === false) {
    found = existsInTree(val, root.right);
  }
  return found;
};
module.exports = { node, existsInTree, tree_intersection };

