/* eslint-disable no-undef */
const quickSort=require('../quickSort.js');
describe('quickSort',()=>{
  it('Reverse-sorted',()=>{
    let arr=quickSort([8,4,23,42,16,15],0,5);
    expect(arr).toEqual([4,8,15,16,23,42]);
  });
  it('Reverse-sorted',()=>{
    let arr=quickSort([20,18,12,8,5,-2],0,5);
    expect(arr).toEqual([-2,5,8,12,18,20]);
  });
  it('Reverse-sorted',()=>{
    let arr=quickSort([5,12,7,5,5,7],0,5);
    expect(arr).toEqual([5,5,5,7,7,12]);
  });
});
