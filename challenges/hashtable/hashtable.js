/* eslint-disable no-undef */
const LinkedList = require('../linked-list/lib/linked-list.js');
class HashTable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  hash(key) {
    let ascii = 0;
    for (let i = 0; i < key.length; i++) {
      ascii += key.charCodeAt(i);
    }
    return ascii % this.storage.length;
  }
  add(key, value) {
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      this.storage[hash] = new LinkedList();
    }
    this.storage[hash].insert({ key, value });
  }
  get(key) {
    let hash = this.hash(key);
    let current = this.storage[hash].head;
    let success = null;
    while (current) {
      if (current.value.key === key) {
        success = current.value;
      }
      current = current.next;
    }
    return success;
  }
  contain(key) {
    let hash = this.hash(key);
    let current = this.storage[hash].head;
    let success = false;
    while (current) {
      if (current.value.key === key) {
        success = true;
        break;
      }
      current = current.next;
    }
    return success;
  }

}
module.exports = HashTable;




