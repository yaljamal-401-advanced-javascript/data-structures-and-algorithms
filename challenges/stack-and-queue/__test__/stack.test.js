/* eslint-disable no-undef */
'use strict';
// eslint-disable-next-line no-undef
const Stack = require('../lib/stack.js');

// eslint-disable-next-line no-undef
describe('Satck', () => {
  it('create instance', () => {
    const stack=new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });
  it('return null on empty stack ',()=>{
    const stack=new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('push to the stack',()=>{
    const stack=new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.top).toEqual(1);
  });
  it('push to the stack mullti value',()=>{
    const stack=new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.top).toEqual(3);
  });
  it('pop for  stack',()=>{
    const stack=new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('peek for empty stack',()=>{
    const stack=new Stack();
    expect(stack.peek()).toBeNull();
  });
  it('return the last item in stack',()=>{
    const stack=new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    expect(stack.peek()).toEqual(1);// to make sure it is return the last element
  });
});
