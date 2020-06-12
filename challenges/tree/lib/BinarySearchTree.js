/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
const Node=require('../lib/node.js');
class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  add(data){
    let newNode=Node(data);
    if(this.roo===null){
      this.root=newNode;
    }else{
      this.insertNode(this.root,newNode);
    }
  }
  insertNode(node,newNode){
    if(newNode.data<node.data){
      if(node.left===null)
        node.left=newNode;
      else
        this.insertNode(node.left,newNode);
    }else{
      if(node.right===null)
        node.right=newNode;
      else
        this.insertNode(node.right,newNode);
    }
  }
  contains(value){
    let node=this.root;
    const _traversal=(node)=>{
      if(!node) return false;
      if(value===node.value){
        return true;
      }else if(value>node.value){
        return _traversal(node.right);
      }else if(value<node.value){
        return _traversal(node.left);
      }

    };
    return _traversal(node);
  }

}
// eslint-disable-next-line no-undef
module.exports=BinarySearchTree;
