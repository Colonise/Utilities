import { isNull } from './is-null';
import { expect } from 'chai';

describe('isNull() Tests', () => {
    it('isNull(object: unknown) should check if a variable is null', () => {
        const testCases = [
            { object: null, expected: true },
            { object: [], expected: false },
            { object: {}, expected: false }
        ];

        for (const { object, expected } of testCases) {
            const actual = isNull(object);

            expect(actual).to.equal(expected);
        }
    });
});
