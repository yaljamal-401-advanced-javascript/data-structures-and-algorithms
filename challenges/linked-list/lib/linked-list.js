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
        while(node!=null){
            if(node.value===value){
                return true;
            }
            node.next;
        }
        return false;
    }
    toString(){



    }

}
module.exports=LinkedList;