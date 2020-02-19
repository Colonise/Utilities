import { expect } from 'chai';
import { isString } from './is-string';

describe('isString() Tests', () => {
    it('isString(object: unknown) should check if a variable is a string', () => {
        const testCases = [
            { object: 'a', expected: true },
            { object: [], expected: false },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isString(object);

            expect(actual).to.equal(expected);
        }
    });
});
