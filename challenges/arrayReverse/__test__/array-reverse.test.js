'use strict';

const reverse = require('./array-reverse.js');

describe('reverse()', () => {
    it('can reverse', () => {
        let reversed = reverse([1, 2, 3, 4, 5]);
        expect([1, 2, 3, 4, 5]).not.toEqual(reversed);
        expect(reverse(reversed)).toEqual([1, 2, 3, 4, 5]);
    });
});