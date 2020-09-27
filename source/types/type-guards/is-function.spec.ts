import { expect } from 'chai';
import { isFunction } from './is-function';

describe('isFunction() Tests', () => {
    it('isFunction(object: unknown) should check if a variable is a function', () => {
        const testCases = [
            { object: () => {}, expected: true },
            { object: function() {}, expected: true },
            { object() {}, expected: true },
            { object: Function, expected: true },
            { object: [], expected: false },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isFunction(object);

            expect(actual).to.equal(expected);
        }
    });
});
