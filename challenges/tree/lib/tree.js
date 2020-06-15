/* eslint-disable no-undef */

class BinaryTree {
  constructor(root) {
    this.root=root;
  }
  // root >> left >> right
  preOrder(){
    const results=[];
    const _traversal=(node)=>{
      results.push(node.value);
      if(node.left) _traversal(node.left);
      if(node.right)_traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  // left >> root >> right
  inOrder(){
    const results=[];
    const _traversal=(node)=>{
      if(node.left) _traversal(node.left);
      results.push(node.value);
      if(node.right)_traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  // left >> right >> root
  postOrder(){
    const results=[];
    const _traversal=(node)=>{
      if(node.left) _traversal(node.left);
      if(node.right)_traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
  add(value){
    let currentNode=this.root;
    let node=new Node(value);
    if(!currentNode){
      this.root=node;
      return this;
    }
    while(currentNode){
      if(currentNode.value<node.value){
        if(currentNode.right===null){
          currentNode.right=node;
          return this;
        }else{
          currentNode=currentNode.right;
          continue;
        }
      }else{
        if(currentNode.left===null){
          currentNode.left=node;
          return this;
        }else{
          currentNode=currentNode.left;
          continue;
        }
      }
    }
  }
  contains(value){
    let currentNode=this.root;
    if(currentNode===null){
      return false;
    }
    while(currentNode){
      if(currentNode.value===value){
        return true;
      }else if(currentNode.value<value){
        currentNode=currentNode.right;
      }else if(currentNode.value>value){
        currentNode=currentNode.left;
      }

    }
    return false;
  }
  

}
module.exports=BinaryTree;
