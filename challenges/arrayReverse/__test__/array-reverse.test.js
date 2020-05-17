'use strict';

const reverseArray = require('../lib/array-reverse.js');

describe('reverse()', () => {
    it('can reverse', () => {
        // let reversed = reverseArray([1, 2, 3, 4, 5]);
        // expect([1, 2, 3, 4, 5]).not.toEqual(reversed);
        // expect(reverseArray(reversed)).toEqual([1, 2, 3, 4, 5]);
        expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
    });
});