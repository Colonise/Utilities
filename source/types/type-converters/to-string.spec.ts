import { expect } from 'chai';
import { toString } from './to-string';

describe('toString() Tests', () => {
    it('toString(object: unknown) should convert an object to a string', () => {
        const testCases = [
            { object: true, expected: 'true' },
            { object: 1, expected: '1' },
            { object: 0, expected: '0' },
            { object: -1, expected: '-1' },
            { object: NaN, expected: 'NaN' },
            { object: '', expected: '' },
            { object: 'a', expected: 'a' },
            { object: [], expected: '' },
            {
                object: [
                    'a'
                ],
                expected: 'a'
            },
            {
                object: [
                    'a',
                    'b'
                ],
                expected: 'a,b'
            },
            { object: {}, expected: '[object Object]' },
            { object: null, expected: 'null' },
            { object: undefined, expected: 'undefined' }
        ];

        for (const { object, expected } of testCases) {
            const actual = toString(object);

            expect(actual).to.equal(expected);
        }
    });
});
