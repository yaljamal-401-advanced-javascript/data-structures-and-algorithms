/* eslint-disable no-undef */
'use strict';
// eslint-disable-next-line no-redeclare
const Node = require('./node.js');
class LinkedList{
  constructor(){
    this.head=null;
  }
  insert(value){
    const node=new Node(value);
    if(!this.head){
      this.head=node;
      return this;
    }
    let currentNode=this.head;
    while(currentNode.next){
      currentNode=currentNode.next;
    }
    currentNode.next=node;
    return this;
  }
  includes(value){
    let node=this.head;
    while(node){
      if(node.value===value){
        return true;
      }
      node= node.next;
    }
    return false;
  }
  toString(){
    let linkedString='';
    let node=this.head;
    while(node){
      linkedString+=`{${node.value}}->`;
      node= node.next;
    }
    linkedString+='NULL';
    return linkedString;
  }

  append(value){
    const node=new Node(value);
    if(!this.head){
      this.head=node;
      return this;
    }
    let current=this.head;
    while(current.next){
      current=current.next;
    }
    current.next=node;
    return this;
  }
  insertBefore(value, newVal){
    if(!this.head)
      return 'Exception';
    let node=new Node(newVal);
    let current=this.head;
    if(current.value===value)
      return this.insert(newVal);
    while(current.next){
      if(current.next.value===value){
        node.next=current.next;
        current.next=node;
        return this;
      }
      current=current.next;
    }
    return 'Exception';
  }
  insertAfter(value, newVal){
    if(!this.head)
      return 'Exception';
    let node=new Node(newVal);
    let current=this.head;
    while(current){
      if(current.value===value){
        node.next=current.next;
        current.next=node;
        return this;
      }
      current=current.next;
    }
    return 'Exception';
  }
}
module.exports=LinkedList;
