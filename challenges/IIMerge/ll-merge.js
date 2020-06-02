'use strict';
// eslint-disable-next-line no-undef
const LinkedList=require('../linked-list/lib/linked-list.js');

function mergeLists(list1,list2){
  if(list1 && list2){
    let list3=new LinkedList();
    list3.head=list1.head;
    let current=list3.head;
    while(current.next){
      current=current.next;
    }
    current= current.next;
    return list3;
  }else
    return 'enter another list ';
}
// eslint-disable-next-line no-undef
module.exports=mergeLists;
