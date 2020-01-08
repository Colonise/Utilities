import { isNumber } from './is-number';
import { expect } from 'chai';

describe('isNumber() Tests', () => {
    it('isNumber(object: unknown) should check if a variable is a number', () => {
        const testCases = [
            { object: 1, expected: true },
            { object: 0, expected: true },
            { object: NaN, expected: true },
            { object: [], expected: false },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isNumber(object);

            expect(actual).to.equal(expected);
        }
    });
});
