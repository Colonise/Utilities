import { removeAt } from './remove-at';
import { expect } from 'chai';

describe('removeAt() Tests', () => {
    it('removeAt<T>(array: T[], index: number, count?: number) should remove a count of items from an array by an index', () => {
        const testCases = [
            {
                array: [
                    'a',
                    'b',
                    'c',
                    'd',
                    'e'
                ],
                expected: [
                    'a',
                    'b',
                    'e'
                ],
                index: 2,
                count: 2
            }
        ];

        for (const { array, expected, index, count } of testCases) {
            const actual = removeAt(array, index, count);

            expect(actual).to.eql(expected);
        }
    });
});
