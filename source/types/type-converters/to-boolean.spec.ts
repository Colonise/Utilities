import { toBoolean } from './to-boolean';
import { expect } from 'chai';

describe('toBoolean() Tests', () => {
    const testCases = [
        { object: true, expected: true },
        { object: false, expected: false },
        { object: 1, expected: true },
        { object: 0, expected: false },
        { object: -1, expected: true },
        { object: NaN, expected: false },
        { object: '', expected: false },
        { object: 'a', expected: true },
        { object: [], expected: true },
        { object: {}, expected: true },
        { object: null, expected: false },
        { object: undefined, expected: false }
    ];

    it('toBoolean(object: unknown) should convert an object to a boolean', () => {
        for (const { object, expected } of testCases) {
            const actual = toBoolean(object);

            expect(actual).to.equal(expected);
        }
    });
});
