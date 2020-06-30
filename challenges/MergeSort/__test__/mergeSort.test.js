/* eslint-disable no-undef */
const mergeSort = require('../mergeSort.js');
describe('merge sort ',()=>{
  it('reverse sorting ',()=>{
    let merge=mergeSort([20,18,12,8,5,-2]);
    expect(merge).toEqual([-2,5,8,12,18,20]);
  });
  it('Few uniques',()=>{
    let merge=mergeSort([5,12,7,5,5,7]);
    expect(merge).toEqual([5,5,5,7,7,12]);
  });
  // it('Nearly-sorted',()=>{
  //   let merge=mergeSort([2,3,5,7,13,11]);
  //   expect(merge).toEqual([2,3,5,7,11,13]);
  // });
});
