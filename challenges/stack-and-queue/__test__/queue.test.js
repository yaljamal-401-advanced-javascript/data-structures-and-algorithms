/* eslint-disable no-undef */
'use strict';
// eslint-disable-next-line no-undef
const Queue=require('../lib/queue.js');

// eslint-disable-next-line no-undef
describe('Queue',()=>{
  it('enqueue test ',()=>{
    const queue=new Queue();
    queue.enqueue(1);
    expect(queue.storage[0]).toEqual(1);
  });
  it('test enqueue for mutible value',()=>{
    const queue=new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.storage[0]).toEqual(1);
    expect(queue.storage[1]).toEqual(2);
    expect(queue.storage[2]).toEqual(3);
    expect(queue.storage[3]).toEqual(4);
    expect(queue.front).toEqual(1);
    expect(queue.rear).toEqual(4);
  });
  it('test dequeue from queue',()=>{
    const queue=new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);

  });
  it('peek for empty queue',()=>{
    const queue=new Queue();
    expect(queue.peek()).toBeUndefined();
  });
  it('return the last item in queue',()=>{
    const queue=new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
    expect(queue.peek()).toEqual(1);// to make sure it is return the last element
  });
  it('return true on empty queue ',()=>{
    const queue=new Queue();
    expect(queue.isEmpty()).toBeTruthy();
  });
  it('return false on empty queue ',()=>{
    const queue=new Queue();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
  });
  it('create instance', () => {
    const queue=new Queue();
    expect(queue instanceof Queue).toBeTruthy();
  });
});
