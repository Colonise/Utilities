import { expect } from 'chai';
import { first } from './first';

describe('first() Tests', () => {
    const testCases = [
        {
            array: [],
            expected: undefined
        },
        {
            array: [
                'a',
                'b',
                'c',
                'd',
                'e'
            ],
            expected: 'a'
        }
    ];

    it('first<T>(array: T[]) should return the first item', () => {
        for (const { array, expected } of testCases) {
            const actual = first(array);

            expect(actual).to.equal(expected);
        }
    });
});
