'use strict';
class Queue{
  constructor(){
    this.storage=[];
    this.size=0;
  }
  enqueue(item){
    this.storage.push(item);
    this.size++;
    this.front=this.storage[0];
    this.rear=this.storage[this.storage.length-1];
  }
  dequeue(){
    return this.storage.shift();
  }
  peek(){
    return this.storage[0];
  }
  isEmpty(){
    if(this.storage.length>0)
      return false;
    else
      return true;
  }
}
// eslint-disable-next-line no-undef
module.exports=Queue;
