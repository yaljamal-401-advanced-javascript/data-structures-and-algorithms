/* eslint-disable no-undef */
const LinkedList=require('../lib/linked-list.js');
function mergeLists(list1,list2){
  if(list1 && list2){
    let list3=new LinkedList();
    if(list1.head.value){
      list3.append(list1.head.value);
    }
    if(list2.head.value){
      list3.append(list2.head.value);
    }
    let current1=list1.head;
    let current2=list2.head;
    while(current1.next || current2.next){
      if(current1.next){
        current1=current1.next;
        list3.append(current1.value);
      }
      if(current2.next){
        current2=current2.next;
        list3.append(current2.value);
      }
    }
    return list3;

  }else{
    return 'plz enter tow linked list ';
  }
}
module.exports=mergeLists;
