/* eslint-disable no-undef */
'use strict';

// eslint-disable-next-line no-undef
const shiftArray = require('../lib/array-shift.js');

describe('insertShiftArray()', () => {
  it('insertShiftArray', () => {
    expect(shiftArray([1,2,3,4,5],7)).toEqual([1,2,3,7,4,5]);
    expect(shiftArray([2,4,6,8],5)).toEqual([2,4,5,6,8]);
    expect(shiftArray([4,8,15,23,42],16)).toEqual([4,8,15,16,23,42]);
  });
});
