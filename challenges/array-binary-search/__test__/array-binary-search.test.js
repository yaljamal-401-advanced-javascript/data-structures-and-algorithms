/* eslint-disable no-undef */
'use strict';

const binarySearch = require('../lib/array-binary-search.js');

describe('BinarySearch()', () => {
  it('can search', () => {
    // eslint-disable-next-line no-undef
    expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
  });
});
