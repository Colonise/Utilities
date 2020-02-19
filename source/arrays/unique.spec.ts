import { expect } from 'chai';
import { unique } from './unique';

describe('unique() Tests', () => {
    const testCases = [
        {
            array: [
                'a',
                'a',
                'a',
                'a',
                'b',
                'c',
                'c',
                'd',
                'd',
                'd',
                'e'
            ],
            expected: [
                'a',
                'b',
                'c',
                'd',
                'e'
            ]
        }
    ];

    it('unique<T>(array: T[]) should return an array with all items being unique', () => {
        for (const { array, expected } of testCases) {
            const actual = unique(array);

            expect(actual).to.eql(expected);
        }
    });
});
