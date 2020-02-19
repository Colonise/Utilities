import { expect } from 'chai';
import { isVoid } from './is-void';

describe('isVoid() Tests', () => {
    it('isVoid(object: unknown) should check if a variable is null or undefined', () => {
        const testCases = [
            { object: undefined, expected: true },
            { object: null, expected: true },
            { object: [], expected: false },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isVoid(object);

            expect(actual).to.equal(expected);
        }
    });
});
