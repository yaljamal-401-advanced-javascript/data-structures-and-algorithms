/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
// eslint-disable-next-line no-undef
const Node = require('../lib/node.js');
class pseudoqueueu {
  constructor(stack) {
    this.back = stack || null;
  }
  enqueue(value) {
    const node = new Node(value);
    node.next = this.back;
  }
  dequeue() {
    if (!this.back.next || !this.back) {
      this.back = null;
      return 'this is empty queue';
    }
    let current = this.back;
    while (current.next.next) {
      current = current.next;
    }
    let temp = current.next;
    current.next = null;
    return temp || 'empty queue';
  }
}
module.exports = pseudoqueueu;
