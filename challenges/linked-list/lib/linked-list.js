'use strict';
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

}
module.exports=LinkedList;