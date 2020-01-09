import { expect } from 'chai';
import { isArray } from './is-array';

describe('isArray() Tests', () => {
    it('isArray(object: unknown) should check if a variable is an array', () => {
        const testCases = [
            { object: [], expected: true },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isArray(object);

            expect(actual).to.equal(expected);
        }
    });
});
