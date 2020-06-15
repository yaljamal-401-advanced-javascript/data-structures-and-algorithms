/* eslint-disable no-undef */

let fizzBuzz = function(tree) {
  fizzbuzzSearch(tree.root);

  function fizzbuzzSearch(node){
    if(!node){
      return 'nothing';
    }
    else if(node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    }
    else if (node.value % 5 === 0) {
      node.value = 'buzz';
    }
    else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    }
    fizzbuzzSearch(node.left);
    fizzbuzzSearch(node.right);
  }
  return tree;
};

module.exports=fizzBuzz;
