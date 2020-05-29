/* eslint-disable no-undef */
'use strict';
const reverseArray = require('../lib/array-reverse.js');
describe('reverse()', () => {
  it('can reverse', () => {
    expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
