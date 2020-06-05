/* eslint-disable no-undef */
'use strict';
// eslint-disable-next-line no-redeclare
const Node = require('./node.js');
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  includes(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
  toString() {
    let linkedString = '';
    let node = this.head;
    while (node) {
      linkedString += `{${node.value}}->`;
      node = node.next;
    }
    linkedString += 'NULL';
    return linkedString;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }
  insertBefore(value, newVal) {
    if (!this.head)
      return 'Exception';
    let node = new Node(newVal);
    let current = this.head;
    if (current.value === value)
      return this.insert(newVal);
    while (current.next) {
      if (current.next.value === value) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    return 'Exception';
  }
  insertAfter(value, newVal) {
    if (!this.head)
      return 'Exception';
    let node = new Node(newVal);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    return 'Exception';
  }
  kthFromEnd(k) {
    let current = this.head;
    let length = 0;
    let pos = 0;
    while (current) {
      length++;
      current = current.next;
    }
    pos = length - k - 1;
    if (pos < 0 || k < 0)
      return 'Exception';
    current = this.head;
    while (pos) {
      current = current.next;
      pos--;
    }
    return current.value;
  }
  mergeLists(list1,list2){
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
}
module.exports = LinkedList;
