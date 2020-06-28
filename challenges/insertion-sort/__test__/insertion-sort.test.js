/* eslint-disable no-undef */
const insertionSort=require('../insertion-sort.js');

describe('testing insertionSort Function',()=>{
  // it('worst case ',()=>{
  //   const sort=insertionSort([20,18,12,8,5,-2]);
  //   expect(sort).toEqual([-2,5,8,12,18,20]);
  // });

  it('medium  case ',()=>{
    const sort=insertionSort([5,12,7,5,5,7]);
    expect(sort).toEqual([5,5,5,7,7,12]);
  });

  it('best case ',()=>{
    const sort=insertionSort([2,3,5,7,13,11]);
    expect(sort).toEqual([2,3,5,7,11,13]);
  });
});
