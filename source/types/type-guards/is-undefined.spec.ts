import { isUndefined } from './is-undefined';
import { expect } from 'chai';

describe('isUndefined() Tests', () => {
    it('isUndefined(object: unknown) should check if a variable is undefined', () => {
        const testCases = [
            { object: undefined, expected: true },
            { object: [], expected: false },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isUndefined(object);

            expect(actual).to.equal(expected);
        }
    });
});
