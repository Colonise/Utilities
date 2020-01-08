import { toNumber } from './to-number';
import { expect } from 'chai';

describe('toNumber() Tests', () => {
    it('toNumber(object: unknown) should convert an object to a number', () => {
        const testCases = [
            { object: true, expected: 1 },
            { object: 1, expected: 1 },
            { object: 0, expected: 0 },
            { object: -1, expected: -1 },
            { object: '', expected: 0 },
            { object: '1', expected: 1 },
            { object: '.1', expected: 0.1 },
            { object: [], expected: 0 },
            { object: null, expected: 0 }
        ];

        for (const { object, expected } of testCases) {
            const actual = toNumber(object);

            expect(actual).to.equal(expected);
        }
    });

    it('toNumber(object: unknown) should convert an object to NaN', () => {
        const testCases = [
            { object: NaN },
            { object: 'a' },
            { object: {} },
            { object: undefined }
        ];

        for (const { object } of testCases) {
            const actual = toNumber(object);

            expect(isNaN(actual)).to.equal(true);
        }
    });
});
