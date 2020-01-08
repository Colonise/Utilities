import { isObject } from './is-object';
import { expect } from 'chai';

describe('isObject() Tests', () => {
    it('isObject(object: unknown) should check if a variable is a object', () => {
        const testCases = [
            { object: [], expected: true },
            { object: {}, expected: true },
            { object: null, expected: false },
            { object: 1, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isObject(object);

            expect(actual).to.equal(expected);
        }
    });
});
