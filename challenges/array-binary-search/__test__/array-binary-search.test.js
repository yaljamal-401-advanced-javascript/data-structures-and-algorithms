'use strict';

const BinarySearch = require('../lib/array-binary-search.js');

describe('BinarySearch()', () => {
    it('can search', () => {

        expect(BinarySearch([4,8,15,16,23,42], 15)).toEqual(2);
        expect(BinarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);


    });
});