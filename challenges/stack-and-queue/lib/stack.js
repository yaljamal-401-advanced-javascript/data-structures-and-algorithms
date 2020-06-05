'use strict';
class Stack{
  constructor(){
    this.storage=[];
    this.top=null;
  }
  peek(){
    return this.top;
  }
  push(item){
    this.storage.unshift(item);
    this.top=item;
  }
  pop(){
    const item=this.storage.shift();
    this.top=this.storage[0] ? this.storage[0]:null;//if(this.storage[0] return this.storage[0]=null)
    return item;

  }
  isEmpty(){
    if(this.top===null)
      return true;
    else
      return false;
  }
}
// eslint-disable-next-line no-undef
module.exports=Stack;
