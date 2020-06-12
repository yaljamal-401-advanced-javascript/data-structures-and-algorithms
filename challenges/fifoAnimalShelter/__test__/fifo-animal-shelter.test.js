/* eslint-disable no-undef */
const Animal=require('../lib/fifo-animal-shelter.js');
describe('fifo-animal-shelter',()=>{
  it('dont give enqueue the animal',()=>{
    let example=new Animal();
    expect(example.enqueue()).toEqual('plz enter your animal');
  });
  it('give enqueue wrong data',()=>{
    let example=new Animal();
    example.enqueue({type:'car',name:'car2'});
    expect(example.enqueue()).toEqual('plz enter your animal');
  });
  it('dont give enqueue the proffered animal ',()=>{
    let example=new Animal();
    example.enqueue({type:'car',name:'car2'});
    expect(example.dequeue()).toEqual('plz enter your proffered animal');
  });
  it('give dequeue wrong the proffered animal ',()=>{
    let example=new Animal();
    example.enqueue({type:'cat',name:'cat2'});
    expect(example.dequeue({type:'car',name:'car2'})).toEqual('null');
  });
  it('give dequeue the proffered animal ',()=>{
    let example=new Animal();
    example.enqueue({type:'cat',name:'cat2'});
    example.enqueue({type:'dog',name:'dog1'});
    example.enqueue({type:'cat',name:'cat3'});
    example.enqueue({type:'cat',name:'cat4'});
    console.log(example.peek());
    expect(example.dequeue({type:'cat',name:'cat3'})).toEqual({type:'cat',name:'cat3'});
  });


});
