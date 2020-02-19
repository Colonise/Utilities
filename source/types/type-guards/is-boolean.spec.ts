import { expect } from 'chai';
import { isBoolean } from './is-boolean';

describe('isBoolean() Tests', () => {
    it('isBoolean(object: unknown) should check if a variable is a boolean', () => {
        const testCases = [
            { object: true, expected: true },
            { object: false, expected: true },
            { object: [], expected: false },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isBoolean(object);

            expect(actual).to.equal(expected);
        }
    });
});
